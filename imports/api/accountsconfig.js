AccountsTemplates.configure({
    onSubmitHook: function (error, state) {
        if (error) {
            return;
        }
        var password = $('#at-pwd-form :input#at-field-password').val();
        if (state === 'signIn' || state === 'signUp') {
            EncryptionUtils.onSignIn(password);
        }
    }
});