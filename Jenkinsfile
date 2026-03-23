pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "ankit9131/cicd-app"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push to DockerHub') {
    steps {
        withCredentials([string(credentialsId: 'docker-pass', variable: 'PASS')]) {
            sh '''
            echo "$PASS" | docker login -u ankit9131 --password-stdin
            docker push ankit9131/cicd-app:latest
            '''
        }
    }
}

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
