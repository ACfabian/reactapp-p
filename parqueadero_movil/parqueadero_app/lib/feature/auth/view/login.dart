// ignore_for_file: unused_local_variable

import 'package:flutter/material.dart';
import 'package:parqueadero_app/core/utils/utils.dart';
import 'package:parqueadero_app/core/validaters/validaters.dart';

class FormLogin extends StatelessWidget {
  const FormLogin({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final formKey = GlobalKey<FormState>();
    var _email = '';
    var _passwor = '';
    return Scaffold(
      body: SafeArea(
        child: Form(
          key: formKey,
          child: Column(
            children: <Widget>[
              const Text(
                'Inicair Sesión',
                style: TextStyle(fontSize: 18),
              ),
              const SizedBox(height: 25),
              Container(
                margin: const EdgeInsets.all(10),
                color: Colors.blueAccent,
                child: TextFormField(
                  key: keyemailInput,
                  onSaved: (value) => _email = value ?? '',
                  validator: validateEmail,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    // helperText: mensaje,
                    icon: Icon(
                      Icons.event_note,
                    ),
                    hintText: 'Ingrese su email',
                  ),
                ),
              ),
              const SizedBox(height: 10),
              Container(
                margin: const EdgeInsets.all(10),
                color: Colors.blueAccent,
                child: TextFormField(
                  key: keypaswordInput,
                  obscureText: true,
                  onSaved: (value) => _passwor = value ?? '',
                  validator: validatePasword,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    icon: Icon(
                      Icons.security_rounded,
                    ),
                    hintText: 'Ingrese su contraseña',
                  ),
                ),
              ),
              const SizedBox(height: 10),
              const SizedBox(height: 10),
              TextButton(
                key: keytextButton,
                onPressed: () async {
                  if (formKey.currentState!.validate()) {
                    final form = formKey.currentState;
                    form!.save();
                  }
                },
                child: const Text(
                  'Ingresar',
                  style: TextStyle(fontSize: 20, color: Colors.black),
                ),
              ),
              TextButton(
                key: keytextcreateacount,
                onPressed: () {
                  Navigator.pushNamed(context, '/create_acount');
                },
                child: const Text(
                  'Crear Cuenta',
                  style: TextStyle(fontSize: 20, color: Colors.black),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
