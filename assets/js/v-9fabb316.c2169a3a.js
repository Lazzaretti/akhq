"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[741],{5638:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-9fabb316",path:"/docs/configuration/authentifications/oidc.html",title:"OIDC",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Direct OIDC mapping",slug:"direct-oidc-mapping",children:[]}],filePathRelative:"docs/configuration/authentifications/oidc.md",git:{updatedTime:1656874023e3,contributors:[{name:"ThomasSanson",email:"93382375+ThomasSanson@users.noreply.github.com",commits:1}]}}},295:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="oidc" tabindex="-1"><a class="header-anchor" href="#oidc" aria-hidden="true">#</a> OIDC</h1><p>To enable OIDC in the application, you&#39;ll first have to enable OIDC in micronaut:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">oauth2</span><span class="token punctuation">:</span>\n      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n      <span class="token key atrule">clients</span><span class="token punctuation">:</span>\n        <span class="token key atrule">google</span><span class="token punctuation">:</span>\n          <span class="token key atrule">client-id</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;client-id&gt;&quot;</span>\n          <span class="token key atrule">client-secret</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;client-secret&gt;&quot;</span>\n          <span class="token key atrule">openid</span><span class="token punctuation">:</span>\n            <span class="token key atrule">issuer</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;issuer-url&gt;&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>To further tell AKHQ to display OIDC options on the login page and customize claim mapping, configure OIDC in the AKHQ config:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">oidc</span><span class="token punctuation">:</span>\n      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n      <span class="token key atrule">providers</span><span class="token punctuation">:</span>\n        <span class="token key atrule">google</span><span class="token punctuation">:</span>\n          <span class="token key atrule">label</span><span class="token punctuation">:</span> <span class="token string">&quot;Login with Google&quot;</span>\n          <span class="token key atrule">username-field</span><span class="token punctuation">:</span> preferred_username\n          <span class="token comment"># specifies the field name in the oidc claim containing the use assigned role (eg. in keycloak this would be the Token Claim Name you set in your Client Role Mapper)</span>\n          <span class="token key atrule">groups-field</span><span class="token punctuation">:</span> roles\n          <span class="token key atrule">default-group</span><span class="token punctuation">:</span> topic<span class="token punctuation">-</span>reader\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n            <span class="token comment"># the name of the user role set in your oidc provider and associated with your user (eg. in keycloak this would be a client role)</span>\n            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mathematicians\n              <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n                <span class="token comment"># the corresponding akhq groups (eg. topic-reader/writer or akhq default groups like admin/reader/no-role)</span>\n                <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>reader\n            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> scientists\n              <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n                <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>reader\n                <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>writer\n          <span class="token key atrule">users</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> franz\n              <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n                <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>reader\n                <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>writer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>The username field can be any string field, the roles field has to be a JSON array.</p><h2 id="direct-oidc-mapping" tabindex="-1"><a class="header-anchor" href="#direct-oidc-mapping" aria-hidden="true">#</a> Direct OIDC mapping</h2><p>If you want to manage AKHQ roles an attributes directly with the OIDC provider, you can use the following configuration:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">oidc</span><span class="token punctuation">:</span>\n      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n      <span class="token key atrule">providers</span><span class="token punctuation">:</span>\n        <span class="token key atrule">google</span><span class="token punctuation">:</span>\n          <span class="token key atrule">label</span><span class="token punctuation">:</span> <span class="token string">&quot;Login with Google&quot;</span>\n          <span class="token key atrule">username-field</span><span class="token punctuation">:</span> preferred_username\n          <span class="token key atrule">use-oidc-claim</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>In this scenario, you need to make the OIDC provider return a JWT which have the following fields:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token comment">// Standard claims</span>\n  <span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">1635868816</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;iat&quot;</span><span class="token operator">:</span> <span class="token number">1635868516</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;preferred_username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>\n  ...\n  <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid email profile&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// Mandatory AKHQ claims</span>\n  <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;acls/read&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;topic/data/delete&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;topic/data/insert&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;...&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Optional AKHQ claims</span>\n  <span class="token comment">// If not set, no filtering is applied (full access &quot;.*&quot;)</span>\n  <span class="token property">&quot;topicsFilterRegexp&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;^json.*$&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;connectsFilterRegexp&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;^json.*$&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;consumerGroupsFilterRegexp&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;^json-consumer.*$&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',11),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);