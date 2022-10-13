pipeline {
  agent {
    docker {
      image "node:16-alpine"
      args "-p 3000:3000"
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

    stage("Deploy") {
      steps {
        sh "scripts/deploy.sh"
      }
    }
  }
}
