import 'package:auth_client/auth_client.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final authenticationProvider = Provider<AuthClient>((ref) {
  return AuthClient();
});

final authStateProvider = StreamProvider<UserModel>((ref) {
  return ref.read(authenticationProvider).getUsercurrent();
});
