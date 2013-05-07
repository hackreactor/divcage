  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>js-motion-detection/js/app.js at master · ReallyGood/js-motion-detection</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="9YlNMSvNxoLJ52XzgAzYOsrAxv/bEaMpuletd1j01Pg=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-f1b15586bc7135fa37ec5f848fbde916e7041f23.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-749329f6bc4f0f2842535f983d87bfdf7d109c41.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-bc374985e8441015fc645eca5b08988b6eadc695.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="e19b657653c304732a1ecdfa62d57114">

        <link data-pjax-transient rel='permalink' href='/ReallyGood/js-motion-detection/blob/331afbb8e432c48457709d2f747af3c4750f2d84/js/app.js'>
    <meta property="og:title" content="js-motion-detection"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/ReallyGood/js-motion-detection"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/717eacdd5a8446ae59d056aa94c73893?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="js-motion-detection - A basic starting point for motion-detection apps using WebRTC &amp; Canvas, refactored out of the Magic Xylophone by @soundstep"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="ReallyGood/js-motion-detection"/>

    <meta name="description" content="js-motion-detection - A basic starting point for motion-detection apps using WebRTC &amp; Canvas, refactored out of the Magic Xylophone by @soundstep" />

  <link href="https://github.com/ReallyGood/js-motion-detection/commits/master.atom" rel="alternate" title="Recent Commits to js-motion-detection:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="seung" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="cmdform">

    <input type="hidden" class="js-repository-name-with-owner" value="ReallyGood/js-motion-detection"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="b8029030c92c8dfb083f84e8119d759c727fde57"/>

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/seung" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/fa5d5dc8c720b67dc8871495701a923a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> seung
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="mini-icon mini-icon-account-settings"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/ReallyGood/js-motion-detection/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="9YlNMSvNxoLJ52XzgAzYOsrAxv/bEaMpuletd1j01Pg=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6182411" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/ReallyGood/js-motion-detection/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/ReallyGood/js-motion-detection/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/ReallyGood/js-motion-detection/stargazers">3</a>
    </li>

        <li>
          <a href="/ReallyGood/js-motion-detection/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/ReallyGood/js-motion-detection/network" class="social-count">1</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/ReallyGood" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">ReallyGood</span>
                  </a></span> /
                <strong><a href="/ReallyGood/js-motion-detection" class="js-current-repository">js-motion-detection</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/ReallyGood/js-motion-detection/pulse" class="js-selected-navigation-item " data-selected-links="pulse /ReallyGood/js-motion-detection/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/ReallyGood/js-motion-detection" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /ReallyGood/js-motion-detection">Code</a></li>
    <li><a href="/ReallyGood/js-motion-detection/network" class="js-selected-navigation-item " data-selected-links="repo_network /ReallyGood/js-motion-detection/network">Network</a></li>
    <li><a href="/ReallyGood/js-motion-detection/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /ReallyGood/js-motion-detection/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/ReallyGood/js-motion-detection/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /ReallyGood/js-motion-detection/issues">Issues <span class='counter'>2</span></a></li>

      <li><a href="/ReallyGood/js-motion-detection/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /ReallyGood/js-motion-detection/wiki">Wiki</a></li>


    <li><a href="/ReallyGood/js-motion-detection/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /ReallyGood/js-motion-detection/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/ReallyGood/js-motion-detection/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /ReallyGood/js-motion-detection/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/ReallyGood/js-motion-detection/blob/master/js/app.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/ReallyGood/js-motion-detection" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /ReallyGood/js-motion-detection">Files</a></li>
    <li><a href="/ReallyGood/js-motion-detection/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /ReallyGood/js-motion-detection/commits/master">Commits</a></li>
    <li><a href="/ReallyGood/js-motion-detection/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /ReallyGood/js-motion-detection/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ff2d6a42bea85edc4cedcf9d43997283 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ff2d6a42bea85edc4cedcf9d43997283 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ReallyGood/js-motion-detection" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js-motion-detection</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ReallyGood/js-motion-detection/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">app.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/app.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/ReallyGood/js-motion-detection/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/2f18a281f9f8a30e4c491037d938be5c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/RonnyO" rel="author">RonnyO</a></span>
    <time class="js-relative-date" datetime="2012-10-11T18:48:22-07:00" title="2012-10-11 18:48:22">October 11, 2012</time>
    <div class="commit-title">
        <a href="/ReallyGood/js-motion-detection/commit/5730ff9938f75fb6b61965f8a028a06f64393e18" class="message">cleanup</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2f18a281f9f8a30e4c491037d938be5c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/RonnyO">RonnyO</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/ReallyGood/js-motion-detection/blob/331afbb8e432c48457709d2f747af3c4750f2d84/js/app.js" data-title="js-motion-detection/js/app.js at master · ReallyGood/js-motion-detection · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>240 lines (213 sloc)</span>
                <span>6.825 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/ReallyGood/js-motion-detection/edit/master/js/app.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/ReallyGood/js-motion-detection/raw/master/js/app.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/ReallyGood/js-motion-detection/blame/master/js/app.js" class="button minibutton ">Blame</a>
                  <a href="/ReallyGood/js-motion-detection/commits/master/js/app.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'>	<span class="c1">// config start</span></div><div class='line' id='LC4'>	<span class="kd">var</span> <span class="nx">OUTLINES</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC5'>	<span class="c1">// config end</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'>	<span class="nb">window</span><span class="p">.</span><span class="nx">hotSpots</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>	<span class="kd">var</span> <span class="nx">content</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#content&#39;</span><span class="p">);</span></div><div class='line' id='LC10'>	<span class="kd">var</span> <span class="nx">video</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#webcam&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC11'>	<span class="kd">var</span> <span class="nx">canvases</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">);</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>	<span class="kd">var</span> <span class="nx">resize</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC14'>		<span class="kd">var</span> <span class="nx">ratio</span> <span class="o">=</span> <span class="nx">video</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="nx">video</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC15'>		<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">width</span><span class="p">();</span></div><div class='line' id='LC16'>		<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">height</span><span class="p">()</span> <span class="o">-</span> <span class="mi">110</span><span class="p">;</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="k">if</span> <span class="p">(</span><span class="nx">content</span><span class="p">.</span><span class="nx">width</span><span class="p">()</span> <span class="o">&gt;</span> <span class="nx">w</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>			<span class="nx">content</span><span class="p">.</span><span class="nx">width</span><span class="p">(</span><span class="nx">w</span><span class="p">);</span></div><div class='line' id='LC20'>			<span class="nx">content</span><span class="p">.</span><span class="nx">height</span><span class="p">(</span><span class="nx">w</span> <span class="o">/</span> <span class="nx">ratio</span><span class="p">);</span></div><div class='line' id='LC21'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC22'>			<span class="nx">content</span><span class="p">.</span><span class="nx">height</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC23'>			<span class="nx">content</span><span class="p">.</span><span class="nx">width</span><span class="p">(</span><span class="nx">h</span> <span class="o">*</span> <span class="nx">ratio</span><span class="p">);</span></div><div class='line' id='LC24'>		<span class="p">}</span></div><div class='line' id='LC25'>		<span class="nx">canvases</span><span class="p">.</span><span class="nx">width</span><span class="p">(</span><span class="nx">content</span><span class="p">.</span><span class="nx">width</span><span class="p">());</span></div><div class='line' id='LC26'>		<span class="nx">canvases</span><span class="p">.</span><span class="nx">height</span><span class="p">(</span><span class="nx">content</span><span class="p">.</span><span class="nx">height</span><span class="p">());</span></div><div class='line' id='LC27'>		<span class="nx">content</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;left&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">w</span> <span class="o">-</span> <span class="nx">content</span><span class="p">.</span><span class="nx">width</span><span class="p">())</span> <span class="o">/</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC28'>		<span class="nx">content</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;top&#39;</span><span class="p">,</span> <span class="p">((</span><span class="nx">h</span> <span class="o">-</span> <span class="nx">content</span><span class="p">.</span><span class="nx">height</span><span class="p">())</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="mi">55</span><span class="p">);</span></div><div class='line' id='LC29'>	<span class="p">}</span></div><div class='line' id='LC30'>	<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">resize</span><span class="p">(</span><span class="nx">resize</span><span class="p">);</span></div><div class='line' id='LC31'>	<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC32'>		<span class="nx">resize</span><span class="p">();</span></div><div class='line' id='LC33'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#watchVideo&#39;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.browsers&quot;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC35'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.browsersWithVideo&quot;</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">300</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC36'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#video-demo&quot;</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">300</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC37'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#video-demo&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">play</span><span class="p">();</span></div><div class='line' id='LC38'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.backFromVideo&#39;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC39'>			<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC40'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC41'>		<span class="p">});</span></div><div class='line' id='LC42'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.backFromVideo a&#39;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC43'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.browsersWithVideo&quot;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC44'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.backFromVideo&#39;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC45'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.browsers&quot;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC46'>			<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#video-demo&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pause</span><span class="p">();</span></div><div class='line' id='LC47'>			<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#video-demo&#39;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC48'>			<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC49'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC50'>		<span class="p">});</span></div><div class='line' id='LC51'>	<span class="p">});</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>	<span class="kd">function</span> <span class="nx">hasGetUserMedia</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC54'>		<span class="c1">// Note: Opera builds are unprefixed.</span></div><div class='line' id='LC55'>		<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">getUserMedia</span> <span class="o">||</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">webkitGetUserMedia</span> <span class="o">||</span></div><div class='line' id='LC56'>			<span class="nx">navigator</span><span class="p">.</span><span class="nx">mozGetUserMedia</span> <span class="o">||</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">msGetUserMedia</span><span class="p">);</span></div><div class='line' id='LC57'>	<span class="p">}</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>	<span class="k">if</span> <span class="p">(</span><span class="nx">hasGetUserMedia</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC60'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.introduction&#39;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC61'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.allow&#39;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC62'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC63'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.browsers&#39;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC64'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC65'>	<span class="p">}</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>	<span class="kd">var</span> <span class="nx">webcamError</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC68'>		<span class="nx">alert</span><span class="p">(</span><span class="s1">&#39;Webcam error!&#39;</span><span class="p">,</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC69'>	<span class="p">};</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>	<span class="k">if</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">getUserMedia</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>		<span class="nx">navigator</span><span class="p">.</span><span class="nx">getUserMedia</span><span class="p">({</span><span class="nx">audio</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">video</span><span class="o">:</span> <span class="kc">true</span><span class="p">},</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">stream</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC73'>			<span class="nx">video</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">stream</span><span class="p">;</span></div><div class='line' id='LC74'>			<span class="nx">initialize</span><span class="p">();</span></div><div class='line' id='LC75'>		<span class="p">},</span> <span class="nx">webcamError</span><span class="p">);</span></div><div class='line' id='LC76'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">webkitGetUserMedia</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>		<span class="nx">navigator</span><span class="p">.</span><span class="nx">webkitGetUserMedia</span><span class="p">({</span><span class="nx">audio</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">video</span><span class="o">:</span> <span class="kc">true</span><span class="p">},</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">stream</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>			<span class="nx">video</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">webkitURL</span><span class="p">.</span><span class="nx">createObjectURL</span><span class="p">(</span><span class="nx">stream</span><span class="p">);</span></div><div class='line' id='LC79'>			<span class="nx">initialize</span><span class="p">();</span></div><div class='line' id='LC80'>		<span class="p">},</span> <span class="nx">webcamError</span><span class="p">);</span></div><div class='line' id='LC81'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC82'>		<span class="c1">//video.src = &#39;somevideo.webm&#39;; // fallback.</span></div><div class='line' id='LC83'>	<span class="p">}</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>	<span class="kd">var</span> <span class="nx">lastImageData</span><span class="p">;</span></div><div class='line' id='LC86'>	<span class="kd">var</span> <span class="nx">canvasSource</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#canvas-source&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC87'>	<span class="kd">var</span> <span class="nx">canvasBlended</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#canvas-blended&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>	<span class="kd">var</span> <span class="nx">contextSource</span> <span class="o">=</span> <span class="nx">canvasSource</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></div><div class='line' id='LC90'>	<span class="kd">var</span> <span class="nx">contextBlended</span> <span class="o">=</span> <span class="nx">canvasBlended</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>	<span class="c1">// mirror video</span></div><div class='line' id='LC93'>	<span class="nx">contextSource</span><span class="p">.</span><span class="nx">translate</span><span class="p">(</span><span class="nx">canvasSource</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC94'>	<span class="nx">contextSource</span><span class="p">.</span><span class="nx">scale</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>	<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>	<span class="kd">function</span> <span class="nx">initialize</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC99'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.introduction&#39;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC100'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.allow&#39;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC101'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.loading&#39;</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">300</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC102'>		<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC103'>	<span class="p">}</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>	<span class="kd">function</span> <span class="nx">start</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC106'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.loading&#39;</span><span class="p">).</span><span class="nx">fadeOut</span><span class="p">();</span></div><div class='line' id='LC107'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#hotSpots&#39;</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC108'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;black-background&#39;</span><span class="p">);</span></div><div class='line' id='LC109'>		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.instructions&quot;</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">600</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC110'>		<span class="nx">$</span><span class="p">(</span><span class="nx">canvasSource</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">600</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC111'>		<span class="nx">$</span><span class="p">(</span><span class="nx">canvasBlended</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">600</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC112'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#canvas-highlights&#39;</span><span class="p">).</span><span class="nx">delay</span><span class="p">(</span><span class="mi">600</span><span class="p">).</span><span class="nx">fadeIn</span><span class="p">();</span></div><div class='line' id='LC113'>		<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;start&#39;</span><span class="p">);</span></div><div class='line' id='LC114'>		<span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC115'>	<span class="p">}</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>	<span class="nb">window</span><span class="p">.</span><span class="nx">requestAnimFrame</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC118'>		<span class="k">return</span> <span class="nb">window</span><span class="p">.</span><span class="nx">requestAnimationFrame</span>       <span class="o">||</span></div><div class='line' id='LC119'>			   <span class="nb">window</span><span class="p">.</span><span class="nx">webkitRequestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC120'>			   <span class="nb">window</span><span class="p">.</span><span class="nx">mozRequestAnimationFrame</span>    <span class="o">||</span></div><div class='line' id='LC121'>			   <span class="nb">window</span><span class="p">.</span><span class="nx">oRequestAnimationFrame</span>      <span class="o">||</span></div><div class='line' id='LC122'>			   <span class="nb">window</span><span class="p">.</span><span class="nx">msRequestAnimationFrame</span>     <span class="o">||</span></div><div class='line' id='LC123'>			<span class="kd">function</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>				<span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="mi">1000</span> <span class="o">/</span> <span class="mi">60</span><span class="p">);</span></div><div class='line' id='LC125'>			<span class="p">};</span></div><div class='line' id='LC126'>	<span class="p">})();</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>	<span class="kd">function</span> <span class="nx">update</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC129'>		<span class="nx">drawVideo</span><span class="p">();</span></div><div class='line' id='LC130'>		<span class="nx">blend</span><span class="p">();</span></div><div class='line' id='LC131'>		<span class="nx">checkAreas</span><span class="p">();</span></div><div class='line' id='LC132'>		<span class="nx">requestAnimFrame</span><span class="p">(</span><span class="nx">update</span><span class="p">);</span></div><div class='line' id='LC133'>	<span class="p">}</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>	<span class="kd">function</span> <span class="nx">drawVideo</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC136'>		<span class="nx">contextSource</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="nx">video</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">video</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">video</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC137'>	<span class="p">}</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>	<span class="kd">function</span> <span class="nx">blend</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC140'>		<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">canvasSource</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC141'>		<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">canvasSource</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC142'>		<span class="c1">// get webcam image data</span></div><div class='line' id='LC143'>		<span class="kd">var</span> <span class="nx">sourceData</span> <span class="o">=</span> <span class="nx">contextSource</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC144'>		<span class="c1">// create an image if the previous image doesn’t exist</span></div><div class='line' id='LC145'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">lastImageData</span><span class="p">)</span> <span class="nx">lastImageData</span> <span class="o">=</span> <span class="nx">contextSource</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC146'>		<span class="c1">// create a ImageData instance to receive the blended result</span></div><div class='line' id='LC147'>		<span class="kd">var</span> <span class="nx">blendedData</span> <span class="o">=</span> <span class="nx">contextSource</span><span class="p">.</span><span class="nx">createImageData</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC148'>		<span class="c1">// blend the 2 images</span></div><div class='line' id='LC149'>		<span class="nx">differenceAccuracy</span><span class="p">(</span><span class="nx">blendedData</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">sourceData</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">lastImageData</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC150'>		<span class="c1">// draw the result in a canvas</span></div><div class='line' id='LC151'>		<span class="nx">contextBlended</span><span class="p">.</span><span class="nx">putImageData</span><span class="p">(</span><span class="nx">blendedData</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC152'>		<span class="c1">// store the current webcam image</span></div><div class='line' id='LC153'>		<span class="nx">lastImageData</span> <span class="o">=</span> <span class="nx">sourceData</span><span class="p">;</span></div><div class='line' id='LC154'>	<span class="p">}</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>	<span class="kd">function</span> <span class="nx">fastAbs</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>		<span class="c1">// funky bitwise, equal Math.abs</span></div><div class='line' id='LC158'>		<span class="k">return</span> <span class="p">(</span><span class="nx">value</span> <span class="o">^</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&gt;&gt;</span> <span class="mi">31</span><span class="p">))</span> <span class="o">-</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&gt;&gt;</span> <span class="mi">31</span><span class="p">);</span></div><div class='line' id='LC159'>	<span class="p">}</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>	<span class="kd">function</span> <span class="nx">threshold</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC162'>		<span class="k">return</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&gt;</span> <span class="mh">0x15</span><span class="p">)</span> <span class="o">?</span> <span class="mh">0xFF</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC163'>	<span class="p">}</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>	<span class="kd">function</span> <span class="nx">difference</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">data1</span><span class="p">,</span> <span class="nx">data2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>		<span class="c1">// blend mode difference</span></div><div class='line' id='LC167'>		<span class="k">if</span> <span class="p">(</span><span class="nx">data1</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="nx">data2</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC168'>		<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC169'>		<span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">data1</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mf">0.25</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC170'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">fastAbs</span><span class="p">(</span><span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]</span> <span class="o">-</span> <span class="nx">data2</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC171'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">fastAbs</span><span class="p">(</span><span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">-</span> <span class="nx">data2</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC172'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">fastAbs</span><span class="p">(</span><span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]</span> <span class="o">-</span> <span class="nx">data2</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]);</span></div><div class='line' id='LC173'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC174'>			<span class="o">++</span><span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC175'>		<span class="p">}</span></div><div class='line' id='LC176'>	<span class="p">}</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>	<span class="kd">function</span> <span class="nx">differenceAccuracy</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">data1</span><span class="p">,</span> <span class="nx">data2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>		<span class="k">if</span> <span class="p">(</span><span class="nx">data1</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="nx">data2</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC180'>		<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC181'>		<span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">data1</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mf">0.25</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC182'>			<span class="kd">var</span> <span class="nx">average1</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">data1</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">])</span> <span class="o">/</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC183'>			<span class="kd">var</span> <span class="nx">average2</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data2</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="nx">data2</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">data2</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">])</span> <span class="o">/</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC184'>			<span class="kd">var</span> <span class="nx">diff</span> <span class="o">=</span> <span class="nx">threshold</span><span class="p">(</span><span class="nx">fastAbs</span><span class="p">(</span><span class="nx">average1</span> <span class="o">-</span> <span class="nx">average2</span><span class="p">));</span></div><div class='line' id='LC185'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">diff</span><span class="p">;</span></div><div class='line' id='LC186'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">diff</span><span class="p">;</span></div><div class='line' id='LC187'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">diff</span><span class="p">;</span></div><div class='line' id='LC188'>			<span class="nx">target</span><span class="p">[</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="mh">0xFF</span><span class="p">;</span></div><div class='line' id='LC189'>			<span class="o">++</span><span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC190'>		<span class="p">}</span></div><div class='line' id='LC191'>	<span class="p">}</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>	<span class="kd">function</span> <span class="nx">checkAreas</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC194'>		<span class="kd">var</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC195'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">h</span> <span class="o">&lt;</span> <span class="nx">hotSpots</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">h</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC196'>			<span class="kd">var</span> <span class="nx">blendedData</span> <span class="o">=</span> <span class="nx">contextBlended</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(</span><span class="nx">hotSpots</span><span class="p">[</span><span class="nx">h</span><span class="p">].</span><span class="nx">x</span><span class="p">,</span> <span class="nx">hotSpots</span><span class="p">[</span><span class="nx">h</span><span class="p">].</span><span class="nx">y</span><span class="p">,</span> <span class="nx">hotSpots</span><span class="p">[</span><span class="nx">h</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span> <span class="nx">hotSpots</span><span class="p">[</span><span class="nx">h</span><span class="p">].</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC197'>			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC198'>			<span class="kd">var</span> <span class="nx">average</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC199'>			<span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">blendedData</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mf">0.25</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC200'>				<span class="c1">// make an average between the color channel</span></div><div class='line' id='LC201'>				<span class="nx">average</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">blendedData</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">4</span><span class="p">]</span> <span class="o">+</span> <span class="nx">blendedData</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">4</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">blendedData</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">4</span> <span class="o">+</span> <span class="mi">2</span><span class="p">])</span> <span class="o">/</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC202'>				<span class="o">++</span><span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC203'>			<span class="p">}</span></div><div class='line' id='LC204'>			<span class="c1">// calculate an average between the color values of the spot area</span></div><div class='line' id='LC205'>			<span class="nx">average</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">average</span> <span class="o">/</span> <span class="p">(</span><span class="nx">blendedData</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mf">0.25</span><span class="p">));</span></div><div class='line' id='LC206'>			<span class="k">if</span> <span class="p">(</span><span class="nx">average</span> <span class="o">&gt;</span> <span class="mi">10</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC207'>				<span class="c1">// over a small limit, consider that a movement is detected</span></div><div class='line' id='LC208'>				<span class="nx">data</span> <span class="o">=</span> <span class="p">{</span><span class="nx">confidence</span><span class="o">:</span> <span class="nx">average</span><span class="p">,</span> <span class="nx">spot</span><span class="o">:</span> <span class="nx">hotSpots</span><span class="p">[</span><span class="nx">h</span><span class="p">]};</span></div><div class='line' id='LC209'>				<span class="nx">$</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">spot</span><span class="p">.</span><span class="nx">el</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;motion&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC210'>			<span class="p">}</span></div><div class='line' id='LC211'>		<span class="p">}</span></div><div class='line' id='LC212'>	<span class="p">}</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>	<span class="kd">function</span> <span class="nx">getCoords</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC215'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#hotSpots&#39;</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>			<span class="kd">var</span> <span class="nx">ratio</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#canvas-highlights&quot;</span><span class="p">).</span><span class="nx">width</span><span class="p">()</span> <span class="o">/</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;video&#39;</span><span class="p">).</span><span class="nx">width</span><span class="p">();</span></div><div class='line' id='LC217'>			<span class="nx">hotSpots</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC218'>				<span class="nx">x</span><span class="o">:</span>      <span class="k">this</span><span class="p">.</span><span class="nx">offsetLeft</span> <span class="o">/</span> <span class="nx">ratio</span><span class="p">,</span></div><div class='line' id='LC219'>				<span class="nx">y</span><span class="o">:</span>      <span class="k">this</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">/</span> <span class="nx">ratio</span><span class="p">,</span></div><div class='line' id='LC220'>				<span class="nx">width</span><span class="o">:</span>  <span class="k">this</span><span class="p">.</span><span class="nx">scrollWidth</span> <span class="o">/</span> <span class="nx">ratio</span><span class="p">,</span></div><div class='line' id='LC221'>				<span class="nx">height</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollHeight</span> <span class="o">/</span> <span class="nx">ratio</span><span class="p">,</span></div><div class='line' id='LC222'>				<span class="nx">el</span><span class="o">:</span>     <span class="nx">el</span></div><div class='line' id='LC223'>			<span class="p">};</span></div><div class='line' id='LC224'>		<span class="p">});</span></div><div class='line' id='LC225'>		<span class="k">if</span> <span class="p">(</span><span class="nx">OUTLINES</span><span class="p">)</span> <span class="nx">highlightHotSpots</span><span class="p">();</span></div><div class='line' id='LC226'>	<span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>	<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;start resize&#39;</span><span class="p">,</span> <span class="nx">getCoords</span><span class="p">);</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>	<span class="kd">function</span> <span class="nx">highlightHotSpots</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC231'>		<span class="kd">var</span> <span class="nx">canvas</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#canvas-highlights&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC232'>		<span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></div><div class='line' id='LC233'>		<span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC234'>		<span class="nx">hotSpots</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>			<span class="nx">ctx</span><span class="p">.</span><span class="nx">strokeStyle</span> <span class="o">=</span> <span class="s1">&#39;rgba(0,255,0,0.6)&#39;</span><span class="p">;</span></div><div class='line' id='LC236'>			<span class="nx">ctx</span><span class="p">.</span><span class="nx">lineWidth</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC237'>			<span class="nx">ctx</span><span class="p">.</span><span class="nx">strokeRect</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC238'>		<span class="p">});</span></div><div class='line' id='LC239'>	<span class="p">}</span></div><div class='line' id='LC240'><span class="p">})();</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543525" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.07980s from fe17.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/ReallyGood/js-motion-detection/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.08041' data-host='fe17'></span>
    
  </body>
</html>

