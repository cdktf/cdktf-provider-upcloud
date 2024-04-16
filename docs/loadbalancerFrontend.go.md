# `loadbalancerFrontend` Submodule <a name="`loadbalancerFrontend` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontend <a name="LoadbalancerFrontend" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.NewLoadbalancerFrontend(scope Construct, id *string, config LoadbalancerFrontendConfig) LoadbalancerFrontend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig">LoadbalancerFrontendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig">LoadbalancerFrontendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties"></a>

```go
func PutProperties(value LoadbalancerFrontendProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks"></a>

```go
func ResetNetworks()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties"></a>

```go
func ResetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.LoadbalancerFrontend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.LoadbalancerFrontend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.LoadbalancerFrontend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.LoadbalancerFrontend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadbalancerFrontend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadbalancerFrontend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerFrontend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules">Rules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs">TlsConfigs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput">DefaultBackendNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput">LoadbalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName">DefaultBackendName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer">Loadbalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port">Port</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks"></a>

```go
func Networks() LoadbalancerFrontendNetworksList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties"></a>

```go
func Properties() LoadbalancerFrontendPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules"></a>

```go
func Rules() *[]*string
```

- *Type:* *[]*string

---

##### `TlsConfigs`<sup>Required</sup> <a name="TlsConfigs" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs"></a>

```go
func TlsConfigs() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultBackendNameInput`<sup>Optional</sup> <a name="DefaultBackendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput"></a>

```go
func DefaultBackendNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadbalancerInput`<sup>Optional</sup> <a name="LoadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput"></a>

```go
func LoadbalancerInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput"></a>

```go
func PropertiesInput() LoadbalancerFrontendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `DefaultBackendName`<sup>Required</sup> <a name="DefaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName"></a>

```go
func DefaultBackendName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer"></a>

```go
func Loadbalancer() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendConfig <a name="LoadbalancerFrontendConfig" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

&loadbalancerfrontend.LoadbalancerFrontendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultBackendName: *string,
	Loadbalancer: *string,
	Mode: *string,
	Name: *string,
	Port: *f64,
	Id: *string,
	Networks: interface{},
	Properties: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.loadbalancerFrontend.LoadbalancerFrontendProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName">DefaultBackendName</a></code> | <code>*string</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer">Loadbalancer</a></code> | <code>*string</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode">Mode</a></code> | <code>*string</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name">Name</a></code> | <code>*string</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port">Port</a></code> | <code>*f64</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultBackendName`<sup>Required</sup> <a name="DefaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName"></a>

```go
DefaultBackendName *string
```

- *Type:* *string

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer"></a>

```go
Loadbalancer *string
```

- *Type:* *string

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties"></a>

```go
Properties LoadbalancerFrontendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

### LoadbalancerFrontendNetworks <a name="LoadbalancerFrontendNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

&loadbalancerfrontend.LoadbalancerFrontendNetworks {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name">Name</a></code> | <code>*string</code> | Name of the load balancer network. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the load balancer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

### LoadbalancerFrontendProperties <a name="LoadbalancerFrontendProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

&loadbalancerfrontend.LoadbalancerFrontendProperties {
	Http2Enabled: interface{},
	InboundProxyProtocol: interface{},
	TimeoutClient: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | Enable or disable HTTP/2 support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol">InboundProxyProtocol</a></code> | <code>interface{}</code> | Enable or disable inbound proxy protocol support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient">TimeoutClient</a></code> | <code>*f64</code> | Client request timeout in seconds. |

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.http2Enabled"></a>

```go
Http2Enabled interface{}
```

- *Type:* interface{}

Enable or disable HTTP/2 support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#http2_enabled LoadbalancerFrontend#http2_enabled}

---

##### `InboundProxyProtocol`<sup>Optional</sup> <a name="InboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol"></a>

```go
InboundProxyProtocol interface{}
```

- *Type:* interface{}

Enable or disable inbound proxy protocol support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}

---

##### `TimeoutClient`<sup>Optional</sup> <a name="TimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient"></a>

```go
TimeoutClient *f64
```

- *Type:* *f64

Client request timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendNetworksList <a name="LoadbalancerFrontendNetworksList" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.NewLoadbalancerFrontendNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerFrontendNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get"></a>

```go
func Get(index *f64) LoadbalancerFrontendNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerFrontendNetworksOutputReference <a name="LoadbalancerFrontendNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.NewLoadbalancerFrontendNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerFrontendNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerFrontendPropertiesOutputReference <a name="LoadbalancerFrontendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerfrontend"

loadbalancerfrontend.NewLoadbalancerFrontendPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadbalancerFrontendPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol">ResetInboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient">ResetTimeoutClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetHttp2Enabled"></a>

```go
func ResetHttp2Enabled()
```

##### `ResetInboundProxyProtocol` <a name="ResetInboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol"></a>

```go
func ResetInboundProxyProtocol()
```

##### `ResetTimeoutClient` <a name="ResetTimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient"></a>

```go
func ResetTimeoutClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput">InboundProxyProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput">TimeoutClientInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol">InboundProxyProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient">TimeoutClient</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2EnabledInput"></a>

```go
func Http2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InboundProxyProtocolInput`<sup>Optional</sup> <a name="InboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput"></a>

```go
func InboundProxyProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutClientInput`<sup>Optional</sup> <a name="TimeoutClientInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput"></a>

```go
func TimeoutClientInput() *f64
```

- *Type:* *f64

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2Enabled"></a>

```go
func Http2Enabled() interface{}
```

- *Type:* interface{}

---

##### `InboundProxyProtocol`<sup>Required</sup> <a name="InboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol"></a>

```go
func InboundProxyProtocol() interface{}
```

- *Type:* interface{}

---

##### `TimeoutClient`<sup>Required</sup> <a name="TimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient"></a>

```go
func TimeoutClient() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerFrontendProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---



