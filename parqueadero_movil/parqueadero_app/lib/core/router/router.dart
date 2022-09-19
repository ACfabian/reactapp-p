import 'package:flutter/material.dart';
import 'package:parqueadero_app/feature/auth/view/create_acount.dart';
import 'package:parqueadero_app/feature/home/home.dart';
import 'package:parqueadero_app/feature/splash/splash.dart';

class Routes {
  static Route<dynamic> get(RouteSettings settings) {
    {
      switch (settings.name) {
        case '/':
          return MaterialPageRoute(builder: (_) => const SplashCream());
        case '/create_acount':
          return PageRouteBuilder(
            pageBuilder: (_, animate, secunradry) => const CreateAcoutn(),
            transitionsBuilder:
                (context, animation, secondaryAnimation, child) => child,
          );
        case '/home':
          return PageRouteBuilder(
            pageBuilder: (_, animate, secunradry) => const Home(),
            transitionsBuilder:
                (context, animation, secondaryAnimation, child) => child,
          );
        case '/feets':
        //return MaterialPageRoute(builder: (_) => const Feets());

        default:
          return MaterialPageRoute(builder: (_) => const SplashCream());
      }
    }
  }
}
