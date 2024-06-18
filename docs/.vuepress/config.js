module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/images/indexlogo.jpg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  title: "郭郭本喵",
  description: "郭郭本喵的学习笔记",
  base: "./",
  theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
	subSidebar: 'auto',
	nav: [
      { text: '首页', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '博客', link: 'https://jmguodegit.gitee.io/guojm-is-cat/' },
      // 支持嵌套,形成下拉式的导航菜单
      {
        text: '编程语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Java', link: '/Program/Java/' },
          { text: 'C|C++', link: '/Program/C++/' }
        ]
	  },
	  { text: '网络', link: '/Program/Network/' },
	  { text: '数据库', link: '/Program/Database/' },
	  { text: '框架|中间件', link: '/Program/Framework/' }
	],
	sidebar: {
        '/Program/Java/': [
            {
                title: '1、Java快速入门',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/',
					'/Program/Java/01JavaSE/01JavaEnvironmentVariable.md',
					'/Program/Java/01JavaSE/02JavaFirst.md'
                ]
            },
			{
                title: '2、Java程序基础',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/02JavaSE/01JavaBasicStructure.md',
					'/Program/Java/02JavaSE/02JavaVariablesandDatatypes.md',
					'/Program/Java/02JavaSE/03JavaIntegerArithmetic.md',
					'/Program/Java/02JavaSE/04JavaFloatingPointOperation.md',
					'/Program/Java/02JavaSE/05JavaBooleanOperation.md',
					'/Program/Java/02JavaSE/06JavaCharactersandStrings.md',
					'/Program/Java/02JavaSE/07JavaArray.md',
					'/Program/Java/02JavaSE/08test.md'
                ]
            },
			{
                title: '3、Java流程控制',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/03JavaSE/01JavaInputAndOutput.md',
					'/Program/Java/03JavaSE/02JavaIf.md',
					'/Program/Java/03JavaSE/03JavaSwitch.md',
					'/Program/Java/03JavaSE/04JavaWhile.md',
					'/Program/Java/03JavaSE/05JavaDoWhile.md',
					'/Program/Java/03JavaSE/06JavaFor.md',
					'/Program/Java/03JavaSE/07JavaBreakContinue.md',
					'/Program/Java/03JavaSE/08test.md'
                ]
            },
			{
                title: '4、Java数组操作',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/04JavaSE/01JavaTraversalArray.md',
					'/Program/Java/04JavaSE/02JavaArraySorting.md',
					'/Program/Java/04JavaSE/03JavaMultidimensionalArray.md',
					'/Program/Java/04JavaSE/04JavaArguments.md',
					'/Program/Java/04JavaSE/05test.md'
                ]
            },
			{
                title: '5、Java面向对象',
                link: '/Program/Java/',
                collapsable: true,
                children: [
					{
						title: '1、面向对象基础',
						link: '/Program/Java/05JavaSE/',
						collapsable: true,
						children: [
							'/Program/Java/05JavaSE/01JavaMethod.md',
							'/Program/Java/05JavaSE/02JavaConstructionMethod.md',
							'/Program/Java/05JavaSE/03JavaMethodOverload.md',
							'/Program/Java/05JavaSE/04JavaInherit.md',
							'/Program/Java/05JavaSE/05JavaPolymorphic.md',
							'/Program/Java/05JavaSE/06JavaAbstractClass.md',
							'/Program/Java/05JavaSE/07JavaInterface.md',
							'/Program/Java/05JavaSE/08JavaStaticFieldsAndStaticMethods.md',
							'/Program/Java/05JavaSE/09JavaWrap.md',
							'/Program/Java/05JavaSE/10JavaActionScope.md',
							'/Program/Java/05JavaSE/11JavaInnerClass.md',
							'/Program/Java/05JavaSE/12JavaClasspathAndJar.md',
							'/Program/Java/05JavaSE/13JavaClassVersion.md',
							'/Program/Java/05JavaSE/14JavaModule.md',
							'/Program/Java/05JavaSE/15test.md'
						]
					},
					{
						title: '2、Java核心类',
						link: '/Program/Java/05JavaSE/',
						collapsable: true,
						children: [
							'/Program/Java/05JavaSE/16JavaStringAndEncoding.md',
							'/Program/Java/05JavaSE/17JavaStringBuilder.md',
							'/Program/Java/05JavaSE/18JavaStringJoiner.md',
							'/Program/Java/05JavaSE/19JavaPackagingType.md',
							'/Program/Java/05JavaSE/20JavaBean.md',
							'/Program/Java/05JavaSE/21JavaEnumerationClass.md',
							'/Program/Java/05JavaSE/22JavaRecordClass.md',
							'/Program/Java/05JavaSE/23JavaBigInteger.md',
							'/Program/Java/05JavaSE/24JavaBigDecimal.md',
							'/Program/Java/05JavaSE/25JavaCommonTools.md'
						]
					}
                ]
            },
			{
                title: '6、Java异常处理',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/06JavaSE/01JavaException.md',
					'/Program/Java/06JavaSE/02JavaCaptureExceptions.md',
					'/Program/Java/06JavaSE/03JavaThrowException.md',
					'/Program/Java/06JavaSE/04JavaCustomException.md',
					'/Program/Java/06JavaSE/05JavaNullPointerException.md',
					'/Program/Java/06JavaSE/06JavaUsingAssertions.md',
					'/Program/Java/06JavaSE/07JavaUsingJDKLogging.md',
					'/Program/Java/06JavaSE/08JavaUsingCommonsLogging.md',
					'/Program/Java/06JavaSE/09JavaUsingLog4j.md',
					'/Program/Java/06JavaSE/10JavaUsingSLF4JandLogback.md'
                ]
            },
			{
                title: '7、Java反射',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/07JavaSE/01JavaClass.md',
					'/Program/Java/07JavaSE/02JavaAccessingFields.md',
					'/Program/Java/07JavaSE/03JavaCallingMethod.md',
					'/Program/Java/07JavaSE/04JavaCallingConstructionMethods.md',
					'/Program/Java/07JavaSE/05JavaObtainInheritanceRelationship.md',
					'/Program/Java/07JavaSE/06JavaDynamicProxy.md'
                ]
            },
			{
                title: '8、Java注解',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/08JavaSE/01JavaUsingAnnotations.md',
					'/Program/Java/08JavaSE/02JavaDefinitionAnnotation.md',
					'/Program/Java/08JavaSE/03JavaProcessAnnotations.md'
                ]
            },
			{
                title: '9、Java泛型',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/09JavaSE/01JavaWhatIsGenerics.md',
					'/Program/Java/09JavaSE/02JavaUseGenerics.md',
					'/Program/Java/09JavaSE/03JavaWritingGenerics.md',
					'/Program/Java/09JavaSE/04JavaSwab.md',
					'/Program/Java/09JavaSE/05JavaExtendsWildcard.md',
					'/Program/Java/09JavaSE/06JavaSuperWildcard.md',
					'/Program/Java/09JavaSE/07JavaGenericsAndReflections.md'
                ]
            },
			{
                title: '10、Java集合',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/10JavaSE/01JavaCollections.md',
					'/Program/Java/10JavaSE/02JavaUsingList.md',
					'/Program/Java/10JavaSE/03JavaWritingTheEqualsMethod.md',
					'/Program/Java/10JavaSE/04JavaUsingMap.md',
					'/Program/Java/10JavaSE/05JavaWriteEqualsAndHashCode.md',
					'/Program/Java/10JavaSE/06JavaUsingEnumMap.md',
					'/Program/Java/10JavaSE/07JavaUsingTreeMap.md',
					'/Program/Java/10JavaSE/08JavaUsingProperties.md',
					'/Program/Java/10JavaSE/09JavaUsingSet.md',
					'/Program/Java/10JavaSE/10JavaUsingQueue.md',
					'/Program/Java/10JavaSE/11JavaUsingPriorityQueue.md',
					'/Program/Java/10JavaSE/12JavaUsingDeque.md',
					'/Program/Java/10JavaSE/13JavaUsingStack.md',
					'/Program/Java/10JavaSE/14JavaUsingIterator.md',
					'/Program/Java/10JavaSE/15JavaUsingCollections.md'
                ]
            },
			{
                title: '11、JavaIO',
                link: '/Program/Java/',
                collapsable: true,
                children: [
                    '/Program/Java/11JavaSE/01JavaFileObject.md',
					'/Program/Java/11JavaSE/02JavaInputStream.md',
					'/Program/Java/11JavaSE/03JavaOutputStream.md',
					'/Program/Java/11JavaSE/04JavaFilterMode.md',
					'/Program/Java/11JavaSE/05JavaOperateZip.md',
					'/Program/Java/11JavaSE/06JavaReadingClasspathResources.md',
					'/Program/Java/11JavaSE/07JavaSerialize.md',
					'/Program/Java/11JavaSE/08JavaReader.md',
					'/Program/Java/11JavaSE/09JavaWriter.md',
					'/Program/Java/11JavaSE/10JavaPrintStreamAndPrintWriter.md',
					'/Program/Java/11JavaSE/11JavaUsingFiles.md'
                ]
            }
        ],
	}
  },
};