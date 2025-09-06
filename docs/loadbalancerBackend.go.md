# `loadbalancerBackend` Submodule <a name="`loadbalancerBackend` Submodule" id="@cdktf/provider-upcloud.loadbalancerBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerBackend <a name="LoadbalancerBackend" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend upcloud_loadbalancer_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.NewLoadbalancerBackend(scope Construct, id *string, config LoadbalancerBackendConfig) LoadbalancerBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig">LoadbalancerBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig">LoadbalancerBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName">ResetResolverName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties"></a>

```go
func PutProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetResolverName` <a name="ResetResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName"></a>

```go
func ResetResolverName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.LoadbalancerBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.LoadbalancerBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.LoadbalancerBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.LoadbalancerBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadbalancerBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadbalancerBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList">LoadbalancerBackendPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tlsConfigs">TlsConfigs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput">LoadbalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput">ResolverNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer">Loadbalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName">ResolverName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties"></a>

```go
func Properties() LoadbalancerBackendPropertiesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList">LoadbalancerBackendPropertiesList</a>

---

##### `TlsConfigs`<sup>Required</sup> <a name="TlsConfigs" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tlsConfigs"></a>

```go
func TlsConfigs() *[]*string
```

- *Type:* *[]*string

---

##### `LoadbalancerInput`<sup>Optional</sup> <a name="LoadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput"></a>

```go
func LoadbalancerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ResolverNameInput`<sup>Optional</sup> <a name="ResolverNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput"></a>

```go
func ResolverNameInput() *string
```

- *Type:* *string

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer"></a>

```go
func Loadbalancer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResolverName`<sup>Required</sup> <a name="ResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName"></a>

```go
func ResolverName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerBackendConfig <a name="LoadbalancerBackendConfig" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

&loadbalancerbackend.LoadbalancerBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Loadbalancer: *string,
	Name: *string,
	Properties: interface{},
	ResolverName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer">Loadbalancer</a></code> | <code>*string</code> | UUID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name">Name</a></code> | <code>*string</code> | The name of the backend. Must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties">Properties</a></code> | <code>interface{}</code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName">ResolverName</a></code> | <code>*string</code> | Domain name resolver used with dynamic type members. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer"></a>

```go
Loadbalancer *string
```

- *Type:* *string

UUID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the backend. Must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties"></a>

```go
Properties interface{}
```

- *Type:* interface{}

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `ResolverName`<sup>Optional</sup> <a name="ResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName"></a>

```go
ResolverName *string
```

- *Type:* *string

Domain name resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

### LoadbalancerBackendProperties <a name="LoadbalancerBackendProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

&loadbalancerbackend.LoadbalancerBackendProperties {
	HealthCheckExpectedStatus: *f64,
	HealthCheckFall: *f64,
	HealthCheckInterval: *f64,
	HealthCheckRise: *f64,
	HealthCheckTlsVerify: interface{},
	HealthCheckType: *string,
	HealthCheckUrl: *string,
	Http2Enabled: interface{},
	OutboundProxyProtocol: *string,
	StickySessionCookieName: *string,
	TimeoutServer: *f64,
	TimeoutTunnel: *f64,
	TlsEnabled: interface{},
	TlsUseSystemCa: interface{},
	TlsVerify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus">HealthCheckExpectedStatus</a></code> | <code>*f64</code> | Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for `tcp` `health_check_type`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall">HealthCheckFall</a></code> | <code>*f64</code> | Sets how many failed health checks are allowed until the backend member is taken off from the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval">HealthCheckInterval</a></code> | <code>*f64</code> | Interval between health checks in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise">HealthCheckRise</a></code> | <code>*f64</code> | Sets how many successful health checks are required to put the backend member back into rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify">HealthCheckTlsVerify</a></code> | <code>interface{}</code> | Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | Health check type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl">HealthCheckUrl</a></code> | <code>*string</code> | Target path for health check HTTP GET requests. Ignored for `tcp` `health_check_type`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol">OutboundProxyProtocol</a></code> | <code>*string</code> | Enable outbound proxy protocol by setting the desired version. Defaults to empty string. Empty string disables proxy protocol. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName">StickySessionCookieName</a></code> | <code>*string</code> | Sets sticky session cookie name. Empty string disables sticky session. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer">TimeoutServer</a></code> | <code>*f64</code> | Backend server timeout in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel">TimeoutTunnel</a></code> | <code>*f64</code> | Maximum inactivity time on the client and server side for tunnels in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsEnabled">TlsEnabled</a></code> | <code>interface{}</code> | Enables TLS connection from the load balancer to backend servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsUseSystemCa">TlsUseSystemCa</a></code> | <code>interface{}</code> | If enabled, then the system CA certificate bundle will be used for the certificate verification. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsVerify">TlsVerify</a></code> | <code>interface{}</code> | Enables backend servers certificate verification. |

---

##### `HealthCheckExpectedStatus`<sup>Optional</sup> <a name="HealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus"></a>

```go
HealthCheckExpectedStatus *f64
```

- *Type:* *f64

Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for `tcp` `health_check_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}

---

##### `HealthCheckFall`<sup>Optional</sup> <a name="HealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall"></a>

```go
HealthCheckFall *f64
```

- *Type:* *f64

Sets how many failed health checks are allowed until the backend member is taken off from the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}

---

##### `HealthCheckInterval`<sup>Optional</sup> <a name="HealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval"></a>

```go
HealthCheckInterval *f64
```

- *Type:* *f64

Interval between health checks in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}

---

##### `HealthCheckRise`<sup>Optional</sup> <a name="HealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise"></a>

```go
HealthCheckRise *f64
```

- *Type:* *f64

Sets how many successful health checks are required to put the backend member back into rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}

---

##### `HealthCheckTlsVerify`<sup>Optional</sup> <a name="HealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify"></a>

```go
HealthCheckTlsVerify interface{}
```

- *Type:* interface{}

Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_tls_verify LoadbalancerBackend#health_check_tls_verify}

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType"></a>

```go
HealthCheckType *string
```

- *Type:* *string

Health check type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}

---

##### `HealthCheckUrl`<sup>Optional</sup> <a name="HealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl"></a>

```go
HealthCheckUrl *string
```

- *Type:* *string

Target path for health check HTTP GET requests. Ignored for `tcp` `health_check_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.http2Enabled"></a>

```go
Http2Enabled interface{}
```

- *Type:* interface{}

Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true.

Note: members should support HTTP/2 for this setting to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#http2_enabled LoadbalancerBackend#http2_enabled}

---

##### `OutboundProxyProtocol`<sup>Optional</sup> <a name="OutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol"></a>

```go
OutboundProxyProtocol *string
```

- *Type:* *string

Enable outbound proxy protocol by setting the desired version. Defaults to empty string. Empty string disables proxy protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}

---

##### `StickySessionCookieName`<sup>Optional</sup> <a name="StickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName"></a>

```go
StickySessionCookieName *string
```

- *Type:* *string

Sets sticky session cookie name. Empty string disables sticky session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}

---

##### `TimeoutServer`<sup>Optional</sup> <a name="TimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer"></a>

```go
TimeoutServer *f64
```

- *Type:* *f64

Backend server timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}

---

##### `TimeoutTunnel`<sup>Optional</sup> <a name="TimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel"></a>

```go
TimeoutTunnel *f64
```

- *Type:* *f64

Maximum inactivity time on the client and server side for tunnels in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsEnabled"></a>

```go
TlsEnabled interface{}
```

- *Type:* interface{}

Enables TLS connection from the load balancer to backend servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#tls_enabled LoadbalancerBackend#tls_enabled}

---

##### `TlsUseSystemCa`<sup>Optional</sup> <a name="TlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsUseSystemCa"></a>

```go
TlsUseSystemCa interface{}
```

- *Type:* interface{}

If enabled, then the system CA certificate bundle will be used for the certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#tls_use_system_ca LoadbalancerBackend#tls_use_system_ca}

---

##### `TlsVerify`<sup>Optional</sup> <a name="TlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsVerify"></a>

```go
TlsVerify interface{}
```

- *Type:* interface{}

Enables backend servers certificate verification.

Please make sure that TLS config with the certificate bundle of type authority attached to the backend or `tls_use_system_ca` enabled. Note: `tls_verify` has preference over `health_check_tls_verify` when `tls_enabled` in true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.2/docs/resources/loadbalancer_backend#tls_verify LoadbalancerBackend#tls_verify}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerBackendPropertiesList <a name="LoadbalancerBackendPropertiesList" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.NewLoadbalancerBackendPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerBackendPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.get"></a>

```go
func Get(index *f64) LoadbalancerBackendPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerBackendPropertiesOutputReference <a name="LoadbalancerBackendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/loadbalancerbackend"

loadbalancerbackend.NewLoadbalancerBackendPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerBackendPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus">ResetHealthCheckExpectedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall">ResetHealthCheckFall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval">ResetHealthCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise">ResetHealthCheckRise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify">ResetHealthCheckTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl">ResetHealthCheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol">ResetOutboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName">ResetStickySessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer">ResetTimeoutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel">ResetTimeoutTunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsUseSystemCa">ResetTlsUseSystemCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsVerify">ResetTlsVerify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthCheckExpectedStatus` <a name="ResetHealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus"></a>

```go
func ResetHealthCheckExpectedStatus()
```

##### `ResetHealthCheckFall` <a name="ResetHealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall"></a>

```go
func ResetHealthCheckFall()
```

##### `ResetHealthCheckInterval` <a name="ResetHealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval"></a>

```go
func ResetHealthCheckInterval()
```

##### `ResetHealthCheckRise` <a name="ResetHealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise"></a>

```go
func ResetHealthCheckRise()
```

##### `ResetHealthCheckTlsVerify` <a name="ResetHealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify"></a>

```go
func ResetHealthCheckTlsVerify()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType"></a>

```go
func ResetHealthCheckType()
```

##### `ResetHealthCheckUrl` <a name="ResetHealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl"></a>

```go
func ResetHealthCheckUrl()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHttp2Enabled"></a>

```go
func ResetHttp2Enabled()
```

##### `ResetOutboundProxyProtocol` <a name="ResetOutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol"></a>

```go
func ResetOutboundProxyProtocol()
```

##### `ResetStickySessionCookieName` <a name="ResetStickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName"></a>

```go
func ResetStickySessionCookieName()
```

##### `ResetTimeoutServer` <a name="ResetTimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer"></a>

```go
func ResetTimeoutServer()
```

##### `ResetTimeoutTunnel` <a name="ResetTimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel"></a>

```go
func ResetTimeoutTunnel()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsEnabled"></a>

```go
func ResetTlsEnabled()
```

##### `ResetTlsUseSystemCa` <a name="ResetTlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsUseSystemCa"></a>

```go
func ResetTlsUseSystemCa()
```

##### `ResetTlsVerify` <a name="ResetTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsVerify"></a>

```go
func ResetTlsVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput">HealthCheckExpectedStatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput">HealthCheckFallInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput">HealthCheckIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput">HealthCheckRiseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput">HealthCheckTlsVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput">HealthCheckUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput">OutboundProxyProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput">StickySessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput">TimeoutServerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput">TimeoutTunnelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCaInput">TlsUseSystemCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerifyInput">TlsVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus">HealthCheckExpectedStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall">HealthCheckFall</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval">HealthCheckInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise">HealthCheckRise</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify">HealthCheckTlsVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl">HealthCheckUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol">OutboundProxyProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName">StickySessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer">TimeoutServer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel">TimeoutTunnel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabled">TlsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCa">TlsUseSystemCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerify">TlsVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheckExpectedStatusInput`<sup>Optional</sup> <a name="HealthCheckExpectedStatusInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput"></a>

```go
func HealthCheckExpectedStatusInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckFallInput`<sup>Optional</sup> <a name="HealthCheckFallInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput"></a>

```go
func HealthCheckFallInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckIntervalInput`<sup>Optional</sup> <a name="HealthCheckIntervalInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput"></a>

```go
func HealthCheckIntervalInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckRiseInput`<sup>Optional</sup> <a name="HealthCheckRiseInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput"></a>

```go
func HealthCheckRiseInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckTlsVerifyInput`<sup>Optional</sup> <a name="HealthCheckTlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput"></a>

```go
func HealthCheckTlsVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput"></a>

```go
func HealthCheckTypeInput() *string
```

- *Type:* *string

---

##### `HealthCheckUrlInput`<sup>Optional</sup> <a name="HealthCheckUrlInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput"></a>

```go
func HealthCheckUrlInput() *string
```

- *Type:* *string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2EnabledInput"></a>

```go
func Http2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutboundProxyProtocolInput`<sup>Optional</sup> <a name="OutboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput"></a>

```go
func OutboundProxyProtocolInput() *string
```

- *Type:* *string

---

##### `StickySessionCookieNameInput`<sup>Optional</sup> <a name="StickySessionCookieNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput"></a>

```go
func StickySessionCookieNameInput() *string
```

- *Type:* *string

---

##### `TimeoutServerInput`<sup>Optional</sup> <a name="TimeoutServerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput"></a>

```go
func TimeoutServerInput() *f64
```

- *Type:* *f64

---

##### `TimeoutTunnelInput`<sup>Optional</sup> <a name="TimeoutTunnelInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput"></a>

```go
func TimeoutTunnelInput() *f64
```

- *Type:* *f64

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabledInput"></a>

```go
func TlsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsUseSystemCaInput`<sup>Optional</sup> <a name="TlsUseSystemCaInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCaInput"></a>

```go
func TlsUseSystemCaInput() interface{}
```

- *Type:* interface{}

---

##### `TlsVerifyInput`<sup>Optional</sup> <a name="TlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerifyInput"></a>

```go
func TlsVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckExpectedStatus`<sup>Required</sup> <a name="HealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus"></a>

```go
func HealthCheckExpectedStatus() *f64
```

- *Type:* *f64

---

##### `HealthCheckFall`<sup>Required</sup> <a name="HealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall"></a>

```go
func HealthCheckFall() *f64
```

- *Type:* *f64

---

##### `HealthCheckInterval`<sup>Required</sup> <a name="HealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval"></a>

```go
func HealthCheckInterval() *f64
```

- *Type:* *f64

---

##### `HealthCheckRise`<sup>Required</sup> <a name="HealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise"></a>

```go
func HealthCheckRise() *f64
```

- *Type:* *f64

---

##### `HealthCheckTlsVerify`<sup>Required</sup> <a name="HealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify"></a>

```go
func HealthCheckTlsVerify() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `HealthCheckUrl`<sup>Required</sup> <a name="HealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl"></a>

```go
func HealthCheckUrl() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2Enabled"></a>

```go
func Http2Enabled() interface{}
```

- *Type:* interface{}

---

##### `OutboundProxyProtocol`<sup>Required</sup> <a name="OutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol"></a>

```go
func OutboundProxyProtocol() *string
```

- *Type:* *string

---

##### `StickySessionCookieName`<sup>Required</sup> <a name="StickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName"></a>

```go
func StickySessionCookieName() *string
```

- *Type:* *string

---

##### `TimeoutServer`<sup>Required</sup> <a name="TimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer"></a>

```go
func TimeoutServer() *f64
```

- *Type:* *f64

---

##### `TimeoutTunnel`<sup>Required</sup> <a name="TimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel"></a>

```go
func TimeoutTunnel() *f64
```

- *Type:* *f64

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabled"></a>

```go
func TlsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsUseSystemCa`<sup>Required</sup> <a name="TlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCa"></a>

```go
func TlsUseSystemCa() interface{}
```

- *Type:* interface{}

---

##### `TlsVerify`<sup>Required</sup> <a name="TlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerify"></a>

```go
func TlsVerify() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



