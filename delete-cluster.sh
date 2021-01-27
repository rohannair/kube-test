#!/bin/bash -e

kubectl delete -f k8s -R
helm delete kong

exec zsh