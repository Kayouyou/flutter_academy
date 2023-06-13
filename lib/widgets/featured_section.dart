import 'package:flutter/material.dart';

import '../res/responsive.dart';

class FeaturedSection extends StatelessWidget {
  const FeaturedSection(
      {Key? key,
      required this.image,
      required this.title,
      required this.description,
      required this.buttonLabel,
      required this.onActionPressed,
      this.imageLeft = true})
      : super(key: key);

  final String image;
  final String title;
  final String description;
  final String buttonLabel;
  final bool imageLeft;
  final Function() onActionPressed;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return Container(
      // width: 1340,
      height: width > ScreenSizes.md ? null : 600,
      padding: const EdgeInsets.all(32.0),
      child: Flex(
        direction: getAxis(width),
        children: [
          if (imageLeft)
            Expanded(
              child: Image.asset(
                image,
                height: 450,
              ),
            ),
          const SizedBox(
            width: 20.0,
          ),
          Expanded(
            child: Column(
              children: [
                Text(
                  title,
                  style: Theme.of(context).textTheme.headline3,
                ),
                const SizedBox(height: 20.0),
                Text(description),
                const SizedBox(height: 10.0),
                ElevatedButton(
                  child: Text(buttonLabel),
                  onPressed: onActionPressed,
                )
              ],
            ),
          ),
          if (!imageLeft)
            Expanded(
              child: Image.asset(
                image,
                height: 450,
              ),
            ),
        ],
      ),
    );
  }
}
