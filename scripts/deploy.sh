#!/bin/bash

scp -i ~/.ssh/aws-key ./root/* ec2-user@ec2-3-16-109-171.us-east-2.compute.amazonaws.com:/var/www/daniel-boll.me/
