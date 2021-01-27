#!/bin/bash -e

kubectl delete -f k8s -R

exec zsh