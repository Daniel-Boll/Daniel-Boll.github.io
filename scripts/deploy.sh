#!/bin/bash

scp -i ~/.ssh/aws-key ./root/* ubuntu@ec2-18-188-97-142.us-east-2.compute.amazonaws.com:/var/www/daniel-boll.me/
