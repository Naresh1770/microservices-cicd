pipeline{
    agent any
    triggers{
        pollSCM('* * * * *')
    }
    stages{
        stage('Checkout'){
            steps{
                git url: '',
                    branch: 'main'
            }
        }
        stage('Build services'){
            steps{
                sh'docker-compose build'
            }
        }
        stage('Deploy srevices'){
            steps{
                sh'''
                docker-compose down || true
                docker-compose up -d
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