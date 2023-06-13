import 'package:flutter/material.dart';

import '../main.dart';

class DrawerNav extends StatelessWidget {
  const DrawerNav({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          Container(
            color: Theme.of(context).primaryColor,
            padding: const EdgeInsets.all(16.0),
            child: Text(
              "Flutter Academy",
              style: Theme.of(context)
                  .textTheme
                  .headline6
                  ?.copyWith(color: Colors.white),
            ),
          ),
          ListTile(
              title: Text("Home"),
              onTap: () => routerDelegate
                  .go('/') //Navigator.pushNamed(context, '/courses'),
              ),
          ListTile(
              title: Text("Courses"),
              onTap: () => routerDelegate
                  .go('/courses') //Navigator.pushNamed(context, '/courses'),
              ),
          ListTile(
              title: Text("About"),
              onTap: () => routerDelegate
                  .go('/about') //Navigator.pushNamed(context, '/about'),
              ),
          ListTile(
              title: Text("Contact"),
              onTap: () => routerDelegate
                  .go('/contact') //Navigator.pushNamed(context, '/contact'),
              ),
        ],
      ),
    );
  }
}
