export default ngModule => {

  if (ON_TEST) {
    require('./kcd-hello.test')(ngModule);
  }

  ngModule.directive('kcdHello', function($log) {
    require('./kcd-hello.sass');
    return {
      restrict: 'E',
      scope: {},
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',
      controller: /*@ngInject*/ function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
        $log.info('I have some info');
      }
    };
  });
};
