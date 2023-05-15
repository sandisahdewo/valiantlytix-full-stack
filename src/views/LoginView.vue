<script setup>
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import firebaseConfig from '../../firebase.config.js';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()

var uiConfig = {
    signInSuccessUrl: 'products',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            authStore.login(authResult.user)

            return true
        },
    }
};

firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth())

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig)

</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <div class="border border-gray-300 rounded p-10">
            <h3 class="text-xl font-bold">Log in or sign up in seconds</h3>
            <p class="mb-10">Use your email or another service to continue!</p>
            <div id="firebaseui-auth-container"></div>
        </div>
    </div>
</template>