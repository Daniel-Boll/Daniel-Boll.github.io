#!/bin/bash

# Check if there is a root directory
if [ ! -d ./root ]; then
	echo "No root directory found"
	exit 1
fi

scp -r -i ~/.ssh/aws-key ./root ubuntu@ec2-18-188-97-142.us-east-2.compute.amazonaws.com:/var/www/daniel-boll.me
