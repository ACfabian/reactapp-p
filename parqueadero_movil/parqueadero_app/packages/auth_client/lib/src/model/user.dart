// ignore_for_file: public_member_api_docs

import 'package:equatable/equatable.dart';

class Users extends Equatable {
  /// const Users
  const Users({
    required this.email,
    required this.id,
    this.photo = '',
    this.message = '',
  });

  /// email
  final String email;

  /// email

  final String id;

  /// email

  final String message;

  /// email

  final String? photo;

  @override
  List<Object?> get props => [email, id, photo, message];

  /// vacio
  static const empty = Users(id: '', email: '');
  //static const ingresando = Users(id: '', email: '', message: 'ingresado');
}
