pipeline {
  agent any

  environment {
    DOCKER_IMAGE_BACKEND = "zelgarion/expense-backend"
    DOCKER_IMAGE_FRONTEND = "zelgarion/expense-frontend"
  }

  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }
    
    stage('Clone Repo') {
      steps {
        git(
          url: 'https://github.com/amitpandey8834/Expence-Tracker-Web-App',
          branch: 'main'
        )
      }
    }

    stage('Verify Clone') {
      steps {
        sh 'ls -la'
        sh 'ls -la expense-tracker-backend'
      }
    }

    stage('Build Backend Image') {
      steps {
        dir('expense-tracker-backend') {
          sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
        }
      }
    }

    stage('Build Frontend Image') {
      steps {
        dir('expense-tracker-frontend') {
          sh 'docker build -t $DOCKER_IMAGE_FRONTEND .'
        }
      }
    }

    stage('Push Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
          sh 'docker push $DOCKER_IMAGE_BACKEND'
          sh 'docker push $DOCKER_IMAGE_FRONTEND'
        }
      }
    }
  }
}