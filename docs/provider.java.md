# `provider`

Refer to the Terraform Registory for docs: [`upcloud`](https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-upcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpcloudProvider <a name="UpcloudProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs upcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.provider.UpcloudProvider;

UpcloudProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .password(java.lang.String)
//  .retryMax(java.lang.Number)
//  .retryWaitMaxSec(java.lang.Number)
//  .retryWaitMinSec(java.lang.Number)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryMax">retryMax</a></code> | <code>java.lang.Number</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMaxSec">retryWaitMaxSec</a></code> | <code>java.lang.Number</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMinSec">retryWaitMinSec</a></code> | <code>java.lang.Number</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#alias UpcloudProvider#alias}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#password UpcloudProvider#password}

---

##### `retryMax`<sup>Optional</sup> <a name="retryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryMax"></a>

- *Type:* java.lang.Number

Maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#retry_max UpcloudProvider#retry_max}

---

##### `retryWaitMaxSec`<sup>Optional</sup> <a name="retryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMaxSec"></a>

- *Type:* java.lang.Number

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `retryWaitMinSec`<sup>Optional</sup> <a name="retryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.retryWaitMinSec"></a>

- *Type:* java.lang.Number

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.username"></a>

- *Type:* java.lang.String

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#username UpcloudProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax">resetRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec">resetRetryWaitMaxSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec">resetRetryWaitMinSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRetryMax` <a name="resetRetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax"></a>

```java
public void resetRetryMax()
```

##### `resetRetryWaitMaxSec` <a name="resetRetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec"></a>

```java
public void resetRetryWaitMaxSec()
```

##### `resetRetryWaitMinSec` <a name="resetRetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec"></a>

```java
public void resetRetryWaitMinSec()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.provider.UpcloudProvider;

UpcloudProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.provider.UpcloudProvider;

UpcloudProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.provider.UpcloudProvider;

UpcloudProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.provider.UpcloudProvider;

UpcloudProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UpcloudProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UpcloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UpcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the UpcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput">retryMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput">retryWaitMaxSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput">retryWaitMinSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax">retryMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec">retryWaitMaxSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec">retryWaitMinSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `retryMaxInput`<sup>Optional</sup> <a name="retryMaxInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput"></a>

```java
public java.lang.Number getRetryMaxInput();
```

- *Type:* java.lang.Number

---

##### `retryWaitMaxSecInput`<sup>Optional</sup> <a name="retryWaitMaxSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput"></a>

```java
public java.lang.Number getRetryWaitMaxSecInput();
```

- *Type:* java.lang.Number

---

##### `retryWaitMinSecInput`<sup>Optional</sup> <a name="retryWaitMinSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput"></a>

```java
public java.lang.Number getRetryWaitMinSecInput();
```

- *Type:* java.lang.Number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `retryMax`<sup>Optional</sup> <a name="retryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax"></a>

```java
public java.lang.Number getRetryMax();
```

- *Type:* java.lang.Number

---

##### `retryWaitMaxSec`<sup>Optional</sup> <a name="retryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec"></a>

```java
public java.lang.Number getRetryWaitMaxSec();
```

- *Type:* java.lang.Number

---

##### `retryWaitMinSec`<sup>Optional</sup> <a name="retryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec"></a>

```java
public java.lang.Number getRetryWaitMinSec();
```

- *Type:* java.lang.Number

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UpcloudProviderConfig <a name="UpcloudProviderConfig" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.provider.UpcloudProviderConfig;

UpcloudProviderConfig.builder()
//  .alias(java.lang.String)
//  .password(java.lang.String)
//  .retryMax(java.lang.Number)
//  .retryWaitMaxSec(java.lang.Number)
//  .retryWaitMinSec(java.lang.Number)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax">retryMax</a></code> | <code>java.lang.Number</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec">retryWaitMaxSec</a></code> | <code>java.lang.Number</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec">retryWaitMinSec</a></code> | <code>java.lang.Number</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username">username</a></code> | <code>java.lang.String</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#alias UpcloudProvider#alias}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#password UpcloudProvider#password}

---

##### `retryMax`<sup>Optional</sup> <a name="retryMax" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax"></a>

```java
public java.lang.Number getRetryMax();
```

- *Type:* java.lang.Number

Maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#retry_max UpcloudProvider#retry_max}

---

##### `retryWaitMaxSec`<sup>Optional</sup> <a name="retryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec"></a>

```java
public java.lang.Number getRetryWaitMaxSec();
```

- *Type:* java.lang.Number

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `retryWaitMinSec`<sup>Optional</sup> <a name="retryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec"></a>

```java
public java.lang.Number getRetryWaitMinSec();
```

- *Type:* java.lang.Number

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.12.0/docs#username UpcloudProvider#username}

---



