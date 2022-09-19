// ignore_for_file: overridden_fields

import 'package:auth_client/src/model/user.dart';

/// UserModel
class UserModel extends Users {
  /// Constructor
  const UserModel({
    required this.email,
    required this.id,
    required this.menssage,
    this.photo,
  }) : super(email: email, id: id, photo: photo, message: menssage);

  /// factyory
  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
        email: json['email'] as String,
        id: json['id'] as String,
        menssage: json['menssage'] as String,
      );

  /// email
  @override
  final String email;

  /// email
  @override
  final String id;

  /// menssage
  final String menssage;

  /// menssage

  @override
  final String? photo;

  ///conviertla respuesta en un json
  Map<String, dynamic> toJson() => {
        'email': email,
        'id': id,
        'menssage': menssage,
      };
  @override
  List<Object?> get props => [email, id, menssage, photo];
}
