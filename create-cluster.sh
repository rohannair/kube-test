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

helm repo add kong https://charts.konghq.com
helm repo update
helm install kong kong/kong --set ingressController.installCRDs=false
kubectl apply -f k8s -R
