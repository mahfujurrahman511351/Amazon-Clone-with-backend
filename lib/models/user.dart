// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

class User {
  final String id;
  final String name;
  final String email;
  final String password;
  final String address;
  final String type;
  User({
    required this.id,
    required this.name,
    required this.email,
    required this.password,
    required this.address,
    required this.type,
  });

  User copyWith({
    String? id,
    String? name,
    String? email,
    String? password,
    String? address,
    String? type,
  }) {
    return User(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      password: password ?? this.password,
      address: address ?? this.address,
      type: type ?? this.type,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'email': email,
      'password': password,
      'address': address,
      'type': type,
    };
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['_id'] as String,
      name: map['name'] as String,
      email: map['email'] as String,
      password: map['password'] as String,
      address: map['address'] as String,
      type: map['type'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) => User.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'User(id: $id, name: $name, email: $email, password: $password, address: $address, type: $type)';
  }

  @override
  bool operator ==(covariant User other) {
    if (identical(this, other)) return true;

    return other.id == id && other.name == name && other.email == email && other.password == password && other.address == address && other.type == type;
  }

  @override
  int get hashCode {
    return id.hashCode ^ name.hashCode ^ email.hashCode ^ password.hashCode ^ address.hashCode ^ type.hashCode;
  }
}
