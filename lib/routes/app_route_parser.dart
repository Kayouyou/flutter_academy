import 'package:flutter/material.dart';

/*
AppRouteInformationParser 的作用是将应用程序的状态转换为 URI 对象，以便在应用程序中进行导航。
具体来说，它实现了 RouteInformationParser<Uri> 泛型类型，
并包含两个方法：parseRouteInformation 和 restoreRouteInformation。
其中，parseRouteInformation 方法用于将 RouteInformation 对象转换为 Uri 对象，
而 restoreRouteInformation 方法则用于将 Uri 对象转换为 RouteInformation 对象。

通过使用 AppRouteInformationParser，我们可以将应用程序的状态表示为一个 URI 字符串，
然后使用 RouterDelegate 类中的 setNewRoutePath 方法将其设置为新的路由路径。
这样，我们就可以根据应用程序状态来动态构建页面堆栈，并在不同的页面之间进行导航。
同时，URI 字符串还可以被用作深层链接或书签，使用户能够轻松地分享和访问特定页面。
 */

class AppRouteInformationParser extends RouteInformationParser<Uri> {
  @override
  Future<Uri> parseRouteInformation(RouteInformation routeInformation) async =>
      Uri.parse(routeInformation.location!);

  @override
  RouteInformation restoreRouteInformation(Uri configuration) =>
      RouteInformation(location: configuration.toString());
}
