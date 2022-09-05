// ignore_for_file: public_member_api_docs

import 'package:firebase_auth/firebase_auth.dart' as firebase_auth;
import 'package:google_sign_in/google_sign_in.dart';

class AuthClient {
  /// {@macro auth_client}
  AuthClient({
    firebase_auth.FirebaseAuth? firebaseAuth,
    GoogleSignIn? googleSignIn,
  })  : _firebaseAuth = firebaseAuth ?? firebase_auth.FirebaseAuth.instance,
        _googleSignIn = googleSignIn ?? GoogleSignIn.standard();

  final firebase_auth.FirebaseAuth _firebaseAuth;
  final GoogleSignIn _googleSignIn;

  Future<void> getIngresarAcount({
    required String email,
    required String pasword,
  }) async {
    try {
      await _firebaseAuth.signInWithEmailAndPassword(
        email: email,
        password: pasword,
      );
    } on firebase_auth.FirebaseAuthException catch (e) {
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
    } on firebase_auth.FirebaseAuthException {
      throw Exception();
    } catch (e) {
      throw Exception();
    }
  }

  Future<void> getGoogleSignit() async {
    try {
      final result = await _googleSignIn.signIn();

      final googleAuth = await result?.authentication;

      final credenciaL = firebase_auth.GoogleAuthProvider.credential(
        accessToken: googleAuth!.accessToken,
        idToken: googleAuth.idToken,
      );

      await _firebaseAuth.signInWithCredential(credenciaL);
    } on firebase_auth.FirebaseAuthException catch (e) {
      throw Exception(e.code);
    } catch (e) {
      throw Exception();
    }
  }
}
