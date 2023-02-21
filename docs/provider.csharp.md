# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-upcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpcloudProvider <a name="UpcloudProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud upcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new UpcloudProvider(Construct Scope, string Id, UpcloudProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig">UpcloudProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig">UpcloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax">ResetRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec">ResetRetryWaitMaxSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec">ResetRetryWaitMinSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRetryMax` <a name="ResetRetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax"></a>

```csharp
private void ResetRetryMax()
```

##### `ResetRetryWaitMaxSec` <a name="ResetRetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec"></a>

```csharp
private void ResetRetryWaitMaxSec()
```

##### `ResetRetryWaitMinSec` <a name="ResetRetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec"></a>

```csharp
private void ResetRetryWaitMinSec()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

UpcloudProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

UpcloudProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

UpcloudProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput">RetryMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput">RetryWaitMaxSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput">RetryWaitMinSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax">RetryMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec">RetryWaitMaxSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec">RetryWaitMinSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RetryMaxInput`<sup>Optional</sup> <a name="RetryMaxInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput"></a>

```csharp
public double RetryMaxInput { get; }
```

- *Type:* double

---

##### `RetryWaitMaxSecInput`<sup>Optional</sup> <a name="RetryWaitMaxSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput"></a>

```csharp
public double RetryWaitMaxSecInput { get; }
```

- *Type:* double

---

##### `RetryWaitMinSecInput`<sup>Optional</sup> <a name="RetryWaitMinSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput"></a>

```csharp
public double RetryWaitMinSecInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RetryMax`<sup>Optional</sup> <a name="RetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax"></a>

```csharp
public double RetryMax { get; }
```

- *Type:* double

---

##### `RetryWaitMaxSec`<sup>Optional</sup> <a name="RetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec"></a>

```csharp
public double RetryWaitMaxSec { get; }
```

- *Type:* double

---

##### `RetryWaitMinSec`<sup>Optional</sup> <a name="RetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec"></a>

```csharp
public double RetryWaitMinSec { get; }
```

- *Type:* double

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UpcloudProviderConfig <a name="UpcloudProviderConfig" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new UpcloudProviderConfig {
    string Alias = null,
    string Password = null,
    double RetryMax = null,
    double RetryWaitMaxSec = null,
    double RetryWaitMinSec = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password">Password</a></code> | <code>string</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax">RetryMax</a></code> | <code>double</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec">RetryWaitMaxSec</a></code> | <code>double</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec">RetryWaitMinSec</a></code> | <code>double</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username">Username</a></code> | <code>string</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud#alias UpcloudProvider#alias}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud#password UpcloudProvider#password}

---

##### `RetryMax`<sup>Optional</sup> <a name="RetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax"></a>

```csharp
public double RetryMax { get; set; }
```

- *Type:* double

Maximum number of retries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud#retry_max UpcloudProvider#retry_max}

---

##### `RetryWaitMaxSec`<sup>Optional</sup> <a name="RetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec"></a>

```csharp
public double RetryWaitMaxSec { get; set; }
```

- *Type:* double

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `RetryWaitMinSec`<sup>Optional</sup> <a name="RetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec"></a>

```csharp
public double RetryWaitMinSec { get; set; }
```

- *Type:* double

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud#username UpcloudProvider#username}

---



