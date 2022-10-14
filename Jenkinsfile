pipeline {
  agent any
  
  options {
    ansiColor('xterm')
  }
  
  stages {
    stage("Node docker") {
      agent {
        docker {
          image "node:16-alpine"
          args "-u 1000 -p 3000:3000"
        }
      }

      stages {
        stage("Fetch dependencies") {
          steps {
            sh "npm install"
          }
        }

        stage("Build") {
          steps {
            sh "npm run build"
          }
        }
      }
    }

    stage("Deploy") {
      steps {
        dir("${env.WORKSPACE}@2") {
          sh "chmod +x ./scripts/deploy.sh"
          sh "./scripts/deploy.sh"
        }
      }
    }
  }
}
