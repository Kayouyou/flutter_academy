import 'package:flutter/material.dart';

import '../pages/about_page.dart';
import '../pages/contact_page.dart';
import '../pages/course_details_page.dart';
import '../pages/courses_page.dart';
import '../pages/error_404_page.dart';
import '../pages/home_page.dart';

class AppRouterDelegate extends RouterDelegate<Uri>
    with ChangeNotifier, PopNavigatorRouterDelegateMixin<Uri> {
  final GlobalKey<NavigatorState> navigatorKey;

  Uri _path = Uri.parse('/');

  AppRouterDelegate() : navigatorKey = GlobalKey<NavigatorState>();

  Uri get currentConfiguration => _path;

  @override
  Widget build(BuildContext context) {
    // 构建当前页面堆栈中的顶部页面的 Widget 表示形式
    // 在本例中，我们将使用 Navigator 和 MaterialApp 等小部件来构建应用程序 UI
    final pages = _getRoutes(_path);
    return Navigator(
      pages: pages,
      onPopPage: (route, result) {
        if (!route.didPop(result)) {
          return false;
        }
        if (pages.isNotEmpty) {
          //具体来说，它使用 replace 方法创建一个新的 Uri 对象，并将其分配给 _path 变量。
          // 该方法接受一个名为 pathSegments 的参数，它是一个包含路径段字符串的列表。
          // 在本例中，我们使用 _path.pathSegments 来获取当前路径中的路径段列表，
          // 然后使用 getRange 方法来截取列表中除最后一个元素之外的所有元素。
          // 最后，我们将截取后的列表赋值回 pathSegments 属性中，
          // 从而得到一个新的路由路径对象，表示从页面堆栈中弹出了一个页面。
          _path = _path.replace(
              pathSegments: _path.pathSegments
                  .getRange(0, _path.pathSegments.length - 1));
          notifyListeners();
          return true;
        }
        return false;
      },
    );
  }

  @override
  Future<bool> popRoute() {
    // 处理返回按钮按下事件
    // 如果成功弹出页面，则返回 true；否则返回 false
    // 在本例中，我们将使用 Navigator 组件来管理页面堆栈，因此这个方法在 AppRouterDelegate 类中不需要实现
    throw UnimplementedError();
  }

  // 接受从 RouteInformationParser 中解析出来的新的路由信息
  // 并根据这些信息更新应用程序状态和页面堆栈
  // 在本例中，我们将使用 MaterialApp 和 Navigator 等小部件来更新 UI，并构建新的页面堆栈
  @override
  Future<void> setNewRoutePath(Uri configuration) async =>
      go(configuration.toString());

  go(String path) {
    _path = Uri.parse(path);
    notifyListeners();
  }

  List<Page> _getRoutes(Uri path) {
    final pages = [
      MaterialPage(child: HomePage(), key: ValueKey('home')),
    ];
    if (path.pathSegments.length == 0) {
      return pages;
    }
    switch (path.pathSegments[0]) {
      case 'contact':
        pages.add(MaterialPage(
          key: ValueKey('/contacts'),
          child: ContactPage(),
        ));
        break;
      case 'about':
        pages.add(MaterialPage(
          key: ValueKey('/about'),
          child: AboutPage(),
        ));
        break;
      case 'courses':
        pages.add(MaterialPage(
          key: ValueKey('/courses'),
          child: CoursesPage(),
        ));
        break;
      default:
        pages.add(MaterialPage(child: Error404Page(), key: ValueKey('error')));
        break;
    }
    if (path.pathSegments.length == 2) {
      if (path.pathSegments[0] == 'courses') {
        pages.add(
          MaterialPage(
            key: ValueKey('course.${path.pathSegments[1]}'),
            child: CourseDetailsPage(
              courseId: path.pathSegments[1],
            ),
          ),
        );
      } else {
        pages.add(MaterialPage(child: Error404Page(), key: ValueKey('error')));
      }
    }
    return pages;
  }
}
