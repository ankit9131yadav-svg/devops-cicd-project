pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "DOCKER_USERNAME/cicd-app"
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
                    echo $PASS | docker login -u DOCKER_USERNAME --password-stdin
                    docker push $DOCKER_IMAGE:latest
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
