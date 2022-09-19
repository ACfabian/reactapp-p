import 'package:flutter/cupertino.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:parqueadero_app/core/custonwidget/loading.dart';
import 'package:parqueadero_app/feature/auth/login/auth.dart';
import 'package:parqueadero_app/feature/auth/view/login.dart';
import 'package:parqueadero_app/feature/home/home.dart';

class SplashCream extends ConsumerWidget {
  const SplashCream({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final reffa = ref.watch(authStateProvider);

    return reffa.when(
      data: (user) {
        if (user.id.isNotEmpty) {
          Navigator.pushNamedAndRemoveUntil(
            context,
            '/bienvenido',
            (route) => false,
          );
          return const Home();
        } else {
          return const FormLogin();
        }
      },
      error: (obet, strack) => ErrorWidget('error'),
      loading: () => const Loading(),
    );
  }
}

// class SplashCream extends StatelessWidget {
//   const SplashCream({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return const Scaffold();
//   }
// }
