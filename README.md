### index.html表示

1. $rootScope $stateChangeStart 				- main.controller.js:14
2. $rootScope $viewContentLoading 				- main.controller.js:31
3. messageService Starting 						- messageService.service.js:7
4. greetingService Starting 					- greetingService.service.js:9
5. resolve.preprocessing 						- sampleApplication.js:44
6. $rootScope $viewContentLoading 				- main.controller.js:31
7. onEnter sampleApplication 					- sampleApplication.js:54
8. state.controller 							- sampleApplication.js:27
9. sampleApplicationFactory Starting 			- sampleApplicationFactory.service.js:6
10. SampleapplicationCtrl Starting 				- sampleApplication.controller.js:6
11. data.customData1 							- sampleApplication.controller.js:7
12. messageService 								- sampleApplication.controller.js:8
13. sampleApplicationFactory 					- sampleApplication.controller.js:9
14. greetingService 							- sampleApplication.controller.js:10
15. $rootScope $stateChangeSuccess 				- main.controller.js:23
16. SampleapplicationCtrl $stateChangeSuccess	- sampleApplication.controller.js:23

### SampleapplicationCtrl（画面描画）

＊レゾルバで処理成功

17. $rootScope $stateChangeStart 				- main.controller.js:14
18. SampleapplicationCtrl $stateChangeStart 	- sampleApplication.controller.js:14
19. $rootScope $viewContentLoading 				- main.controller.js:31
20. SampleapplicationCtrl $viewContentLoading 	- sampleApplication.controller.js:31
21. resolve nextApplication 					- nextApplication.js:20
22. $rootScope $viewContentLoading 				- main.controller.js:31
23. SampleapplicationCtrl $viewContentLoading 	- sampleApplication.controller.js:31
24. onExit sampleApplication 					- sampleApplication.js:58
25. onEnter nextApplication 					- nextApplication.js:25
26. state.controller 							- nextApplication.js:9
27. NextapplicationCtrl 						- nextApplication.controller.js:6
28. resolve nextApplication 					- nextApplication.controller.js:7
29. $rootScope $stateChangeSuccess 				- main.controller.js:23
30. NextapplicationCtrl$stateChangeSuccess 		- nextApplication.controller.js:22

### NextapplicationCtrl（画面描画）

### SampleapplicationCtrl（画面描画） 

＊レゾルバで処理失敗

31. ampleapplicationCtrl $stateChangeStart 		- sampleApplication.controller.js:14
32. SampleapplicationCtrl $viewContentLoading 	- sampleApplication.controller.js:31
33. resolve nextApplication 					- nextApplication.js:20
34. SampleapplicationCtrl $stateChangeError 	- sampleApplication.controller.js:27

### SampleapplicationCtrl（画面描画） のまま
