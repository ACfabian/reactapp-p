import 'package:flutter/material.dart';
import 'package:parqueadero_app/core/utils/utils.dart';
import 'package:parqueadero_app/core/validaters/validaters.dart';

class CreateAcoutn extends StatelessWidget {
  const CreateAcoutn({
    super.key,
    this.mensaje = '',
  });
  final String mensaje;

  @override
  Widget build(BuildContext context) {
    final formKey = GlobalKey<FormState>();

    var _email = 'vacio';
    var _passwor = 'vacio';
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create Acount'),
      ),
      body: Form(
        key: formKey,
        child: Column(
          children: <Widget>[
            const SizedBox(height: 25),
            Container(
              margin: const EdgeInsets.all(10),
              color: Colors.blue,
              child: TextFormField(
                key: keyemailInput,
                onSaved: (value) => _email = value ?? '',
                validator: validateEmail,
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
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
              color: Colors.blue,
              child: TextFormField(
                key: keypaswordInput,
                obscureText: true,
                onSaved: (value) => _passwor = value ?? '',
                validator: validatePasword,
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  helperText: mensaje,
                  icon: const Icon(
                    Icons.security_rounded,
                  ),
                  hintText: 'Ingrese su contraseña',
                ),
              ),
            ),
            const SizedBox(height: 10),
            TextButton(
              key: keytextButton,
              onPressed: () {
                if (formKey.currentState!.validate()) {
                  formKey.currentState!.save();

                  //Todo para las pruebas se hacce está validación

                  // context
                  //     .read<CreateacountCubit>()
                  //     .getCreateACount(_email.trim(), _passwor.trim());
                }
              },
              child: const Text(
                'Crear Cuenta',
                style: TextStyle(fontSize: 20, color: Colors.black),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
