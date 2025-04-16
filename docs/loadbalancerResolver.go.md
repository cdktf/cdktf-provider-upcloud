# `loadbalancerResolver` Submodule <a name="`loadbalancerResolver` Submodule" id="@cdktf/provider-upcloud.loadbalancerResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerResolver <a name="LoadbalancerResolver" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver upcloud_loadbalancer_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerresolver"

loadbalancerresolver.NewLoadbalancerResolver(scope Construct, id *string, config LoadbalancerResolverConfig) LoadbalancerResolver
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig">LoadbalancerResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig">LoadbalancerResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerresolver"

loadbalancerresolver.LoadbalancerResolver_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerresolver"

loadbalancerresolver.LoadbalancerResolver_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerresolver"

loadbalancerresolver.LoadbalancerResolver_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerresolver"

loadbalancerresolver.LoadbalancerResolver_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadbalancerResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadbalancerResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadbalancerResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalidInput">CacheInvalidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValidInput">CacheValidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancerInput">LoadbalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameserversInput">NameserversInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetryInput">TimeoutRetryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalid">CacheInvalid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValid">CacheValid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancer">Loadbalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameservers">Nameservers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetry">TimeoutRetry</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CacheInvalidInput`<sup>Optional</sup> <a name="CacheInvalidInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalidInput"></a>

```go
func CacheInvalidInput() *f64
```

- *Type:* *f64

---

##### `CacheValidInput`<sup>Optional</sup> <a name="CacheValidInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValidInput"></a>

```go
func CacheValidInput() *f64
```

- *Type:* *f64

---

##### `LoadbalancerInput`<sup>Optional</sup> <a name="LoadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancerInput"></a>

```go
func LoadbalancerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameserversInput"></a>

```go
func NameserversInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TimeoutRetryInput`<sup>Optional</sup> <a name="TimeoutRetryInput" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetryInput"></a>

```go
func TimeoutRetryInput() *f64
```

- *Type:* *f64

---

##### `CacheInvalid`<sup>Required</sup> <a name="CacheInvalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheInvalid"></a>

```go
func CacheInvalid() *f64
```

- *Type:* *f64

---

##### `CacheValid`<sup>Required</sup> <a name="CacheValid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.cacheValid"></a>

```go
func CacheValid() *f64
```

- *Type:* *f64

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.loadbalancer"></a>

```go
func Loadbalancer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.nameservers"></a>

```go
func Nameservers() *[]*string
```

- *Type:* *[]*string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `TimeoutRetry`<sup>Required</sup> <a name="TimeoutRetry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.timeoutRetry"></a>

```go
func TimeoutRetry() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolver.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerResolverConfig <a name="LoadbalancerResolverConfig" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/loadbalancerresolver"

&loadbalancerresolver.LoadbalancerResolverConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CacheInvalid: *f64,
	CacheValid: *f64,
	Loadbalancer: *string,
	Name: *string,
	Nameservers: *[]*string,
	Retries: *f64,
	Timeout: *f64,
	TimeoutRetry: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheInvalid">CacheInvalid</a></code> | <code>*f64</code> | Time in seconds to cache invalid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheValid">CacheValid</a></code> | <code>*f64</code> | Time in seconds to cache valid results. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.loadbalancer">Loadbalancer</a></code> | <code>*string</code> | ID of the load balancer to which the resolver is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.name">Name</a></code> | <code>*string</code> | The name of the resolver. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.nameservers">Nameservers</a></code> | <code>*[]*string</code> | List of nameserver IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.retries">Retries</a></code> | <code>*f64</code> | Number of retries on failure. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Timeout for the query in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeoutRetry">TimeoutRetry</a></code> | <code>*f64</code> | Timeout for the query retries in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CacheInvalid`<sup>Required</sup> <a name="CacheInvalid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheInvalid"></a>

```go
CacheInvalid *f64
```

- *Type:* *f64

Time in seconds to cache invalid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#cache_invalid LoadbalancerResolver#cache_invalid}

---

##### `CacheValid`<sup>Required</sup> <a name="CacheValid" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.cacheValid"></a>

```go
CacheValid *f64
```

- *Type:* *f64

Time in seconds to cache valid results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#cache_valid LoadbalancerResolver#cache_valid}

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.loadbalancer"></a>

```go
Loadbalancer *string
```

- *Type:* *string

ID of the load balancer to which the resolver is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#loadbalancer LoadbalancerResolver#loadbalancer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the resolver. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#name LoadbalancerResolver#name}

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.nameservers"></a>

```go
Nameservers *[]*string
```

- *Type:* *[]*string

List of nameserver IP addresses.

Nameserver can reside in public internet or in customer private network. Port is optional, if missing then default 53 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#nameservers LoadbalancerResolver#nameservers}

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Number of retries on failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#retries LoadbalancerResolver#retries}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Timeout for the query in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#timeout LoadbalancerResolver#timeout}

---

##### `TimeoutRetry`<sup>Required</sup> <a name="TimeoutRetry" id="@cdktf/provider-upcloud.loadbalancerResolver.LoadbalancerResolverConfig.property.timeoutRetry"></a>

```go
TimeoutRetry *f64
```

- *Type:* *f64

Timeout for the query retries in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.21.0/docs/resources/loadbalancer_resolver#timeout_retry LoadbalancerResolver#timeout_retry}

---



