# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-upcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UpcloudProvider <a name="UpcloudProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs upcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/provider"

provider.NewUpcloudProvider(scope Construct, id *string, config UpcloudProviderConfig) UpcloudProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig">UpcloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-upcloud.provider.UpcloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig">UpcloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRequestTimeoutSec">ResetRequestTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax">ResetRetryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec">ResetRetryWaitMaxSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec">ResetRetryWaitMinSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.provider.UpcloudProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.provider.UpcloudProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRequestTimeoutSec` <a name="ResetRequestTimeoutSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRequestTimeoutSec"></a>

```go
func ResetRequestTimeoutSec()
```

##### `ResetRetryMax` <a name="ResetRetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryMax"></a>

```go
func ResetRetryMax()
```

##### `ResetRetryWaitMaxSec` <a name="ResetRetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMaxSec"></a>

```go
func ResetRetryWaitMaxSec()
```

##### `ResetRetryWaitMinSec` <a name="ResetRetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetRetryWaitMinSec"></a>

```go
func ResetRetryWaitMinSec()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.provider.UpcloudProvider.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/provider"

provider.UpcloudProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/provider"

provider.UpcloudProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/provider"

provider.UpcloudProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.provider.UpcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/provider"

provider.UpcloudProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a UpcloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the UpcloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing UpcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.provider.UpcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the UpcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSecInput">RequestTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput">RetryMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput">RetryWaitMaxSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput">RetryWaitMinSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSec">RequestTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax">RetryMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec">RetryWaitMaxSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec">RetryWaitMinSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutSecInput`<sup>Optional</sup> <a name="RequestTimeoutSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSecInput"></a>

```go
func RequestTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `RetryMaxInput`<sup>Optional</sup> <a name="RetryMaxInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMaxInput"></a>

```go
func RetryMaxInput() *f64
```

- *Type:* *f64

---

##### `RetryWaitMaxSecInput`<sup>Optional</sup> <a name="RetryWaitMaxSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSecInput"></a>

```go
func RetryWaitMaxSecInput() *f64
```

- *Type:* *f64

---

##### `RetryWaitMinSecInput`<sup>Optional</sup> <a name="RetryWaitMinSecInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSecInput"></a>

```go
func RetryWaitMinSecInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RequestTimeoutSec`<sup>Optional</sup> <a name="RequestTimeoutSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.requestTimeoutSec"></a>

```go
func RequestTimeoutSec() *f64
```

- *Type:* *f64

---

##### `RetryMax`<sup>Optional</sup> <a name="RetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryMax"></a>

```go
func RetryMax() *f64
```

- *Type:* *f64

---

##### `RetryWaitMaxSec`<sup>Optional</sup> <a name="RetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMaxSec"></a>

```go
func RetryWaitMaxSec() *f64
```

- *Type:* *f64

---

##### `RetryWaitMinSec`<sup>Optional</sup> <a name="RetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.retryWaitMinSec"></a>

```go
func RetryWaitMinSec() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.provider.UpcloudProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UpcloudProviderConfig <a name="UpcloudProviderConfig" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/provider"

&provider.UpcloudProviderConfig {
	Alias: *string,
	Password: *string,
	RequestTimeoutSec: *f64,
	RetryMax: *f64,
	RetryWaitMaxSec: *f64,
	RetryWaitMinSec: *f64,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.requestTimeoutSec">RequestTimeoutSec</a></code> | <code>*f64</code> | The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax">RetryMax</a></code> | <code>*f64</code> | Maximum number of retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec">RetryWaitMaxSec</a></code> | <code>*f64</code> | Maximum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec">RetryWaitMinSec</a></code> | <code>*f64</code> | Minimum time to wait between retries. |
| <code><a href="#@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username">Username</a></code> | <code>*string</code> | UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#alias UpcloudProvider#alias}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for UpCloud API user. Can also be configured using the `UPCLOUD_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#password UpcloudProvider#password}

---

##### `RequestTimeoutSec`<sup>Optional</sup> <a name="RequestTimeoutSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.requestTimeoutSec"></a>

```go
RequestTimeoutSec *f64
```

- *Type:* *f64

The duration (in seconds) that the provider waits for an HTTP request towards UpCloud API to complete.

Defaults to 120 seconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#request_timeout_sec UpcloudProvider#request_timeout_sec}

---

##### `RetryMax`<sup>Optional</sup> <a name="RetryMax" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryMax"></a>

```go
RetryMax *f64
```

- *Type:* *f64

Maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#retry_max UpcloudProvider#retry_max}

---

##### `RetryWaitMaxSec`<sup>Optional</sup> <a name="RetryWaitMaxSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMaxSec"></a>

```go
RetryWaitMaxSec *f64
```

- *Type:* *f64

Maximum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#retry_wait_max_sec UpcloudProvider#retry_wait_max_sec}

---

##### `RetryWaitMinSec`<sup>Optional</sup> <a name="RetryWaitMinSec" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.retryWaitMinSec"></a>

```go
RetryWaitMinSec *f64
```

- *Type:* *f64

Minimum time to wait between retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#retry_wait_min_sec UpcloudProvider#retry_wait_min_sec}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.provider.UpcloudProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

UpCloud username with API access. Can also be configured using the `UPCLOUD_USERNAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.1/docs#username UpcloudProvider#username}

---



