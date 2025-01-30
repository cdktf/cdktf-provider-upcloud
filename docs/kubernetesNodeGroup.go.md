# `kubernetesNodeGroup` Submodule <a name="`kubernetesNodeGroup` Submodule" id="@cdktf/provider-upcloud.kubernetesNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesNodeGroup <a name="KubernetesNodeGroup" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group upcloud_kubernetes_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroup(scope Construct, id *string, config KubernetesNodeGroupConfig) KubernetesNodeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig">KubernetesNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig">KubernetesNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan">PutCustomPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs">PutKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity">ResetAntiAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCustomPlan">ResetCustomPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs">ResetKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetStorageEncryption">ResetStorageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess">ResetUtilityNetworkAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomPlan` <a name="PutCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan"></a>

```go
func PutCustomPlan(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKubeletArgs` <a name="PutKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs"></a>

```go
func PutKubeletArgs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint"></a>

```go
func PutTaint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAntiAffinity` <a name="ResetAntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity"></a>

```go
func ResetAntiAffinity()
```

##### `ResetCustomPlan` <a name="ResetCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCustomPlan"></a>

```go
func ResetCustomPlan()
```

##### `ResetKubeletArgs` <a name="ResetKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs"></a>

```go
func ResetKubeletArgs()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetStorageEncryption` <a name="ResetStorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetStorageEncryption"></a>

```go
func ResetStorageEncryption()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint"></a>

```go
func ResetTaint()
```

##### `ResetUtilityNetworkAccess` <a name="ResetUtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess"></a>

```go
func ResetUtilityNetworkAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.KubernetesNodeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.KubernetesNodeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.KubernetesNodeGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.KubernetesNodeGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlan">CustomPlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList">KubernetesNodeGroupCustomPlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs">KubeletArgs</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput">AntiAffinityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlanInput">CustomPlanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput">KubeletArgsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryptionInput">StorageEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput">TaintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput">UtilityNetworkAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity">AntiAffinity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryption">StorageEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess">UtilityNetworkAccess</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomPlan`<sup>Required</sup> <a name="CustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlan"></a>

```go
func CustomPlan() KubernetesNodeGroupCustomPlanList
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList">KubernetesNodeGroupCustomPlanList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubeletArgs`<sup>Required</sup> <a name="KubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs"></a>

```go
func KubeletArgs() KubernetesNodeGroupKubeletArgsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint"></a>

```go
func Taint() KubernetesNodeGroupTaintList
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a>

---

##### `AntiAffinityInput`<sup>Optional</sup> <a name="AntiAffinityInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput"></a>

```go
func AntiAffinityInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `CustomPlanInput`<sup>Optional</sup> <a name="CustomPlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlanInput"></a>

```go
func CustomPlanInput() interface{}
```

- *Type:* interface{}

---

##### `KubeletArgsInput`<sup>Optional</sup> <a name="KubeletArgsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput"></a>

```go
func KubeletArgsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageEncryptionInput`<sup>Optional</sup> <a name="StorageEncryptionInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryptionInput"></a>

```go
func StorageEncryptionInput() *string
```

- *Type:* *string

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput"></a>

```go
func TaintInput() interface{}
```

- *Type:* interface{}

---

##### `UtilityNetworkAccessInput`<sup>Optional</sup> <a name="UtilityNetworkAccessInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput"></a>

```go
func UtilityNetworkAccessInput() interface{}
```

- *Type:* interface{}

---

##### `AntiAffinity`<sup>Required</sup> <a name="AntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity"></a>

```go
func AntiAffinity() interface{}
```

- *Type:* interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `StorageEncryption`<sup>Required</sup> <a name="StorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryption"></a>

```go
func StorageEncryption() *string
```

- *Type:* *string

---

##### `UtilityNetworkAccess`<sup>Required</sup> <a name="UtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess"></a>

```go
func UtilityNetworkAccess() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesNodeGroupConfig <a name="KubernetesNodeGroupConfig" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

&kubernetesnodegroup.KubernetesNodeGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	Name: *string,
	NodeCount: *f64,
	Plan: *string,
	AntiAffinity: interface{},
	CustomPlan: interface{},
	KubeletArgs: interface{},
	Labels: *map[string]*string,
	SshKeys: *[]*string,
	StorageEncryption: *string,
	Taint: interface{},
	UtilityNetworkAccess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster">Cluster</a></code> | <code>*string</code> | UUID of the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the node group. Needs to be unique within a cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Amount of nodes to provision in the node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan">Plan</a></code> | <code>*string</code> | The server plan used for the node group. You can list available plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity">AntiAffinity</a></code> | <code>interface{}</code> | If set to true, nodes in this group will be placed on separate compute hosts. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.customPlan">CustomPlan</a></code> | <code>interface{}</code> | custom_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs">KubeletArgs</a></code> | <code>interface{}</code> | kubelet_args block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User defined key-value pairs to classify the node_group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.storageEncryption">StorageEncryption</a></code> | <code>*string</code> | The storage encryption strategy to use for the nodes in this group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint">Taint</a></code> | <code>interface{}</code> | taint block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess">UtilityNetworkAccess</a></code> | <code>interface{}</code> | If set to false, nodes in this group will not have access to utility network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

UUID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#cluster KubernetesNodeGroup#cluster}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the node group. Needs to be unique within a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#name KubernetesNodeGroup#name}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Amount of nodes to provision in the node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#node_count KubernetesNodeGroup#node_count}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

The server plan used for the node group. You can list available plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#plan KubernetesNodeGroup#plan}

---

##### `AntiAffinity`<sup>Optional</sup> <a name="AntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity"></a>

```go
AntiAffinity interface{}
```

- *Type:* interface{}

If set to true, nodes in this group will be placed on separate compute hosts.

Please note that anti-affinity policy is considered 'best effort' and enabling it does not fully guarantee that the nodes will end up on different hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#anti_affinity KubernetesNodeGroup#anti_affinity}

---

##### `CustomPlan`<sup>Optional</sup> <a name="CustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.customPlan"></a>

```go
CustomPlan interface{}
```

- *Type:* interface{}

custom_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#custom_plan KubernetesNodeGroup#custom_plan}

---

##### `KubeletArgs`<sup>Optional</sup> <a name="KubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs"></a>

```go
KubeletArgs interface{}
```

- *Type:* interface{}

kubelet_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#kubelet_args KubernetesNodeGroup#kubelet_args}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User defined key-value pairs to classify the node_group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#labels KubernetesNodeGroup#labels}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

You can optionally select SSH keys to be added as authorized keys to the nodes in this node group.

This allows you to connect to the nodes via SSH once they are running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#ssh_keys KubernetesNodeGroup#ssh_keys}

---

##### `StorageEncryption`<sup>Optional</sup> <a name="StorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.storageEncryption"></a>

```go
StorageEncryption *string
```

- *Type:* *string

The storage encryption strategy to use for the nodes in this group.

If not set, the cluster's storage encryption strategy will be used, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#storage_encryption KubernetesNodeGroup#storage_encryption}

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint"></a>

```go
Taint interface{}
```

- *Type:* interface{}

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#taint KubernetesNodeGroup#taint}

---

##### `UtilityNetworkAccess`<sup>Optional</sup> <a name="UtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess"></a>

```go
UtilityNetworkAccess interface{}
```

- *Type:* interface{}

If set to false, nodes in this group will not have access to utility network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#utility_network_access KubernetesNodeGroup#utility_network_access}

---

### KubernetesNodeGroupCustomPlan <a name="KubernetesNodeGroupCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

&kubernetesnodegroup.KubernetesNodeGroupCustomPlan {
	Cores: *f64,
	Memory: *f64,
	StorageSize: *f64,
	StorageTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.cores">Cores</a></code> | <code>*f64</code> | The number of CPU cores dedicated to individual node group nodes when using custom plan. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.memory">Memory</a></code> | <code>*f64</code> | The amount of memory in megabytes to assign to individual node group node when using custom plan. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageSize">StorageSize</a></code> | <code>*f64</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageTier">StorageTier</a></code> | <code>*string</code> | The storage tier to use. Defaults to maxiops. |

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.cores"></a>

```go
Cores *f64
```

- *Type:* *f64

The number of CPU cores dedicated to individual node group nodes when using custom plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#cores KubernetesNodeGroup#cores}

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

The amount of memory in megabytes to assign to individual node group node when using custom plan.

Value needs to be divisible by 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#memory KubernetesNodeGroup#memory}

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageSize"></a>

```go
StorageSize *f64
```

- *Type:* *f64

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageTier"></a>

```go
StorageTier *string
```

- *Type:* *string

The storage tier to use. Defaults to maxiops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupKubeletArgs <a name="KubernetesNodeGroupKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

&kubernetesnodegroup.KubernetesNodeGroupKubeletArgs {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key">Key</a></code> | <code>*string</code> | Kubelet argument key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value">Value</a></code> | <code>*string</code> | Kubelet argument value. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key"></a>

```go
Key *string
```

- *Type:* *string

Kubelet argument key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value"></a>

```go
Value *string
```

- *Type:* *string

Kubelet argument value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

### KubernetesNodeGroupTaint <a name="KubernetesNodeGroupTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

&kubernetesnodegroup.KubernetesNodeGroupTaint {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect">Effect</a></code> | <code>*string</code> | Taint effect. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key">Key</a></code> | <code>*string</code> | Taint key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value">Value</a></code> | <code>*string</code> | Taint value. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Taint effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#effect KubernetesNodeGroup#effect}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key"></a>

```go
Key *string
```

- *Type:* *string

Taint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value"></a>

```go
Value *string
```

- *Type:* *string

Taint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.17.0/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesNodeGroupCustomPlanList <a name="KubernetesNodeGroupCustomPlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroupCustomPlanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesNodeGroupCustomPlanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get"></a>

```go
func Get(index *f64) KubernetesNodeGroupCustomPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodeGroupCustomPlanOutputReference <a name="KubernetesNodeGroupCustomPlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroupCustomPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesNodeGroupCustomPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resetStorageTier">ResetStorageTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageTier` <a name="ResetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resetStorageTier"></a>

```go
func ResetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.coresInput">CoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSizeInput">StorageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTierInput">StorageTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.cores">Cores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSize">StorageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTier">StorageTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.coresInput"></a>

```go
func CoresInput() *f64
```

- *Type:* *f64

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `StorageSizeInput`<sup>Optional</sup> <a name="StorageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSizeInput"></a>

```go
func StorageSizeInput() *f64
```

- *Type:* *f64

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTierInput"></a>

```go
func StorageTierInput() *string
```

- *Type:* *string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.cores"></a>

```go
func Cores() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSize"></a>

```go
func StorageSize() *f64
```

- *Type:* *f64

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTier"></a>

```go
func StorageTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodeGroupKubeletArgsList <a name="KubernetesNodeGroupKubeletArgsList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroupKubeletArgsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesNodeGroupKubeletArgsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get"></a>

```go
func Get(index *f64) KubernetesNodeGroupKubeletArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodeGroupKubeletArgsOutputReference <a name="KubernetesNodeGroupKubeletArgsOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroupKubeletArgsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesNodeGroupKubeletArgsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodeGroupTaintList <a name="KubernetesNodeGroupTaintList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroupTaintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesNodeGroupTaintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get"></a>

```go
func Get(index *f64) KubernetesNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesNodeGroupTaintOutputReference <a name="KubernetesNodeGroupTaintOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/kubernetesnodegroup"

kubernetesnodegroup.NewKubernetesNodeGroupTaintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesNodeGroupTaintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



