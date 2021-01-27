#!/bin/bash -e

eval $(minikube docker-env)

## Create Docker images
if [[ "$*" == *'-build' ]]
then
  docker build ./api -t rn-api:0.0.1
  docker build ./ui -t rn-ui:0.0.1
  sleep 3
else
  echo "No docker builds to make"
fi

kubectl apply -f k8s -R