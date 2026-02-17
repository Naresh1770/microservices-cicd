pipeline{
    agent any
    triggers{
        pollSCM('* * * * *')
    }
    tools{
        nodejs "Node18"
    }
    stages{
        stage('Checkout'){
            steps{
                git url: 'https://github.com/Naresh1770/microservices-cicd.git',
                    branch: 'main'
            }
        }
        stage('Build Image'){
            steps{
                sh'''
                docker image build -t naresh1770/user-service:latest ./user-service
                docker image build -t naresh1770/order-service:latest ./order-service
                '''
            }
        }
        stage('Dockerhub Login'){
            steps{
                withCredentials([usernamePassword(credentaials: 'docker_hub',
                                         usernameVariable: 'USERNAME',
                                         passwordVariable: 'PASSWORD')]){
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
            }
        }
        stage('Image Push'){
            steps{
                sh'docker push naresh1770/user-service:latest'
                sh'docker push naresh1770/order-service:latest'
            }
        }
        stage('Deploy srevices'){
            steps{
                sh'''
                docker compose down || true
                docker compose up -d
                '''
            }
        }
    }
    post{
        success{
            echo 'Pipeline is successfully completed'
        }
        failure{
            echo 'Pipeline failed'
        }
    }
}