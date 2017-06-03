#!groovy

node {

    stage('Wait for build node') {
        sh "ls"
    }

    stage('Get code') {
        checkout scm
    }

    // Unique prefix so that docker container names don't clash.
    String randomUUID = java.util.UUID.randomUUID().toString();
    env.COMPOSE_PROJECT_NAME = "jobid${env.BUILD_NUMBER}rand${randomUUID}"

    try {

        stage('Bring up docker cluster') {
            sh "docker-compose -f docker/docker-compose-jenkins.yaml up -d --build"
        }

        stage('Do The Stuff') {
            sh "docker-compose -f docker/docker-compose-jenkins.yaml run runhost docker/build.jenkins"
        }

    } finally {

        stage('Shut down cluster') {
            sh "docker-compose -f docker/docker-compose-jenkins.yaml down"
        }

//        stage('Collect xunit test output') {
//            junit '**/TEST-*.xml'
//        }


    }
}
