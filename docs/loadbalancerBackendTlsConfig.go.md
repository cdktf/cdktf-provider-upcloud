# `loadbalancerBackendTlsConfig` Submodule <a name="`loadbalancerBackendTlsConfig` Submodule" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerBackendTlsConfig <a name="LoadbalancerBackendTlsConfig" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_backend_tls_config upcloud_loadbalancer_backend_tls_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackendtlsconfig"

loadbalancerbackendtlsconfig.NewLoadbalancerBackendTlsConfig(scope Construct, id *string, config LoadbalancerBackendTlsConfigConfig) LoadbalancerBackendTlsConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig">LoadbalancerBackendTlsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig">LoadbalancerBackendTlsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerBackendTlsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackendtlsconfig"

loadbalancerbackendtlsconfig.LoadbalancerBackendTlsConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackendtlsconfig"

loadbalancerbackendtlsconfig.LoadbalancerBackendTlsConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackendtlsconfig"

loadbalancerbackendtlsconfig.LoadbalancerBackendTlsConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackendtlsconfig"

loadbalancerbackendtlsconfig.LoadbalancerBackendTlsConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadbalancerBackendTlsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadbalancerBackendTlsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadbalancerBackendTlsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_backend_tls_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerBackendTlsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.certificateBundleInput">CertificateBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.certificateBundle">CertificateBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CertificateBundleInput`<sup>Optional</sup> <a name="CertificateBundleInput" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.certificateBundleInput"></a>

```go
func CertificateBundleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CertificateBundle`<sup>Required</sup> <a name="CertificateBundle" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.certificateBundle"></a>

```go
func CertificateBundle() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerBackendTlsConfigConfig <a name="LoadbalancerBackendTlsConfigConfig" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackendtlsconfig"

&loadbalancerbackendtlsconfig.LoadbalancerBackendTlsConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CertificateBundle: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.backend">Backend</a></code> | <code>*string</code> | ID of the load balancer backend to which the TLS config is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.certificateBundle">CertificateBundle</a></code> | <code>*string</code> | Reference to certificate bundle ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name of the TLS config. Must be unique within customer account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

ID of the load balancer backend to which the TLS config is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_backend_tls_config#backend LoadbalancerBackendTlsConfig#backend}

---

##### `CertificateBundle`<sup>Required</sup> <a name="CertificateBundle" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.certificateBundle"></a>

```go
CertificateBundle *string
```

- *Type:* *string

Reference to certificate bundle ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_backend_tls_config#certificate_bundle LoadbalancerBackendTlsConfig#certificate_bundle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerBackendTlsConfig.LoadbalancerBackendTlsConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the TLS config. Must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/loadbalancer_backend_tls_config#name LoadbalancerBackendTlsConfig#name}

---



