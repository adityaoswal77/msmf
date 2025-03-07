<?php

namespace Server\Src;
use FastRoute;
use Server\Src\RootController;
use Server\Src\Utils\Constants;
use Server\Src\Utils\Headers;
use Server\Src\Utils\Helpers;

class Server {
    private $routesDispatcher;
    private $entityManager;

    public function __construct() {}

    // Validates whether the request has Authorization Header for protected routes
    private function validateRequest($scope): bool {
        $headers = apache_request_headers();
        if ($scope == "protected" && !isset($headers['Authorization'])) {
            return false;
        } else {
            return true;
        }
    }

    // Creates a request handler for incoming requests
    public function createRequestHandler(array $requestInfo) {
        $routeState = $requestInfo[0];
        $controller = $requestInfo[1][0];
        $handler = $requestInfo[1][1];
        $scope = $requestInfo[1][2];
        $args = $requestInfo[2];

        switch ($routeState) {
            case FastRoute\Dispatcher::NOT_FOUND:
                // ... 404 Not Found
                header(Headers::NOT_FOUND);
                break;
            case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
                // ... 405 Method Not Allowed
                header(Headers::METHOD_NOT_ALLOWED);
                break;
            case FastRoute\Dispatcher::FOUND:
                if(!$this->validateRequest($scope)) {
                    header(Headers::UNAUTHORIZED);
                    Helpers::createFailureResponse(401, array("message" => "Unauthorized Request"));
                    break;
                } else {
                    if ( $handler == Constants::API_STATUS )  {
                        $response = Helpers::createSuccessResponse(200, array("message" => "MSMF API Alive", "status" => 200, "ok" => true));
                        header($response['status_code_header']);
                        echo $response['body'];
                        break;
                    }
                    $rootController = new RootController($this->entityManager, $controller, $handler, $args);
                    $rootController->processRequest();
                    break;
                }
        }
    }

    // Creates a Routes Dispatcher object for API routes
    public function createRoutesDispatcher(): FastRoute\Dispatcher {
        $this->routesDispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
            // Liveness Route
            $r->addRoute('GET', '/v1/status', ["", Constants::API_STATUS]);

            // Auth routes 
            $r->addGroup('/v1/auth', function (FastRoute\RouteCollector $rAuth) {
                $rAuth->post('/token', [Constants::AUTH_CONTROLLER,Constants::GENERATE_TOKEN, Constants::OPEN]);
                $rAuth->get('/validate', [Constants::AUTH_CONTROLLER,Constants::VALIDATE_TOKEN, Constants::PROTECTED]);
            });

            // Facilities routes
            $r->addGroup("/v1/facilities", function (FastRoute\RouteCollector $rFacilities) {
                $rFacilities->get("", [Constants::FACILITY_CONTROLLER, Constants::GET_ALL_FACILITY, Constants::PROTECTED]);
                $rFacilities->get("/{id}", [Constants::FACILITY_CONTROLLER, Constants::GET_FACILITY, Constants::PROTECTED]);
                $rFacilities->post("", [Constants::FACILITY_CONTROLLER, Constants::CREATE_FACILITY, Constants::PROTECTED]);
            });

            // Asset routes
            $r->addGroup("/v1/assets", function (FastRoute\RouteCollector $rAssets) {
                $rAssets->get("", [Constants::ASSETS_CONTROLLER, Constants::GET_ALL_ASSETS, Constants::PROTECTED]);
                $rAssets->post("/upload", [Constants::ASSETS_CONTROLLER, Constants::CREATE_ASSETS, Constants::PROTECTED]);
            });
        });

        return $this->routesDispatcher;
    }

    public function setEntityManager($em) {
        $this->entityManager = $em;
    }

}