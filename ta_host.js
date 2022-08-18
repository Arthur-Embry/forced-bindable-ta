  function wysiwygeditor($scope) {
		$scope.orightml = `
    <h1 id="title_in" placeholder="Title..."></h1>
    <div id="image_in" contenteditable="true" placeholder="Image..."></div>
    
    <div id="intro_in" contenteditable="true" placeholder="Introduction Here..."></div>
    
    <h2 id="header1" placeholder="Subtitle 1..."></h2>
    <div id="body1" contenteditable="true" placeholder="Body 1..."></div>
    
    <h2 id="header2" placeholder="Subtitle 2..."></h2>
    <div id="body2" contenteditable="true" placeholder="Body 2..."></div>
    
    <h2 id="header3" placeholder="Subtitle 3..."></h2>
    <div id="body3" contenteditable="true" placeholder="Body 3..."></div>
    
    <h2 id="header4" placeholder="Subtitle 4..."></h2>
    <div id="body4" contenteditable="true" placeholder="Body 4..."></div>
    
    <!--h2 id="conclusion_in" placeholder="Conclusion Header..."></h2-->
    <div id="conclusion_bod" contenteditable="true" placeholder="Conclusion..."></div>
    `;
		$scope.htmlcontent = $scope.orightml;
		$scope.disabled = false;
};
