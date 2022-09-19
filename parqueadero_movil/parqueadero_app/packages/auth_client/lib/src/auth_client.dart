// ignore_for_file: public_member_api_docs

import 'dart:developer';

import 'package:auth_client/src/model/user_model.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

class AuthClient {
  /// {@macro auth_client}
  AuthClient({
    FirebaseAuth? firebaseAuth,
    GoogleSignIn? googleSignIn,
  })  : _firebaseAuth = firebaseAuth ?? FirebaseAuth.instance,
        _googleSignIn = googleSignIn ?? GoogleSignIn.standard();

  final FirebaseAuth _firebaseAuth;
  final GoogleSignIn _googleSignIn;

  Stream<UserModel> getUsercurrent() {
    return _firebaseAuth.authStateChanges().map((event) {
      try {
        log('imprimir el el evento $event');

        if (event != null) {
          return UserModel(
            email: event.email!,
            id: event.uid,
            menssage: 'autenticated',
          );
        } else {
          return const UserModel(
            email: '',
            id: '',
            menssage: 'not autenticated',
          );
        }
      } catch (e) {
        return const UserModel(email: '', id: '', menssage: '');
      }
    });
  }

  Future<void> getIngresarAcount({
    required String email,
    required String pasword,
  }) async {
    try {
      await _firebaseAuth.signInWithEmailAndPassword(
        email: email,
        password: pasword,
      );
    } on FirebaseAuthException catch (e) {
      throw Exception(e.code);
    } catch (e) {
      throw Exception();
    }
  }

  Future<void> getCreateAcount({
    required String email,
    required String pasword,
  }) async {
    try {
      await _firebaseAuth.createUserWithEmailAndPassword(
        email: email,
        password: pasword,
      );
    } on FirebaseAuthException {
      throw Exception();
    } catch (e) {
      throw Exception();
    }
  }

  Future<void> getGoogleSignit() async {
    try {
      final result = await _googleSignIn.signIn();

      final googleAuth = await result?.authentication;

      final credenciaL = GoogleAuthProvider.credential(
        accessToken: googleAuth!.accessToken,
        idToken: googleAuth.idToken,
      );

      await _firebaseAuth.signInWithCredential(credenciaL);
    } on FirebaseAuthException catch (e) {
      throw Exception(e.code);
    } catch (e) {
      throw Exception();
    }
  }
}
