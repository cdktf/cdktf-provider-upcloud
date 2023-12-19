# `firewallRules` Submodule <a name="`firewallRules` Submodule" id="@cdktf/provider-upcloud.firewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallRules <a name="FirewallRules" id="@cdktf/provider-upcloud.firewallRules.FirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules upcloud_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.NewFirewallRules(scope Construct, id *string, config FirewallRulesConfig) FirewallRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig">FirewallRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig">FirewallRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule">PutFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFirewallRule` <a name="PutFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule"></a>

```go
func PutFirewallRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.FirewallRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.FirewallRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.FirewallRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.FirewallRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirewallRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule">FirewallRule</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput">FirewallRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallRule`<sup>Required</sup> <a name="FirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule"></a>

```go
func FirewallRule() FirewallRulesFirewallRuleList
```

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a>

---

##### `FirewallRuleInput`<sup>Optional</sup> <a name="FirewallRuleInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput"></a>

```go
func FirewallRuleInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallRulesConfig <a name="FirewallRulesConfig" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

&firewallrules.FirewallRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallRule: interface{},
	ServerId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule">FirewallRule</a></code> | <code>interface{}</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId">ServerId</a></code> | <code>*string</code> | The unique id of the server to be protected the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#id FirewallRules#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallRule`<sup>Required</sup> <a name="FirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule"></a>

```go
FirewallRule interface{}
```

- *Type:* interface{}

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

The unique id of the server to be protected the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#id FirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FirewallRulesFirewallRule <a name="FirewallRulesFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

&firewallrules.FirewallRulesFirewallRule {
	Action: *string,
	Direction: *string,
	Comment: *string,
	DestinationAddressEnd: *string,
	DestinationAddressStart: *string,
	DestinationPortEnd: *string,
	DestinationPortStart: *string,
	Family: *string,
	IcmpType: *string,
	Protocol: *string,
	SourceAddressEnd: *string,
	SourceAddressStart: *string,
	SourcePortEnd: *string,
	SourcePortStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action">Action</a></code> | <code>*string</code> | Action to take if the rule conditions are met. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction">Direction</a></code> | <code>*string</code> | The direction of network traffic this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment">Comment</a></code> | <code>*string</code> | Freeform comment string for the rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd">DestinationAddressEnd</a></code> | <code>*string</code> | The destination address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart">DestinationAddressStart</a></code> | <code>*string</code> | The destination address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd">DestinationPortEnd</a></code> | <code>*string</code> | The destination port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart">DestinationPortStart</a></code> | <code>*string</code> | The destination port range starts from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family">Family</a></code> | <code>*string</code> | The address family of new firewall rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType">IcmpType</a></code> | <code>*string</code> | The ICMP type. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd">SourceAddressEnd</a></code> | <code>*string</code> | The source address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart">SourceAddressStart</a></code> | <code>*string</code> | The source address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd">SourcePortEnd</a></code> | <code>*string</code> | The source port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart">SourcePortStart</a></code> | <code>*string</code> | The source port range starts from this port number. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Action to take if the rule conditions are met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#action FirewallRules#action}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction of network traffic this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#direction FirewallRules#direction}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Freeform comment string for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#comment FirewallRules#comment}

---

##### `DestinationAddressEnd`<sup>Optional</sup> <a name="DestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd"></a>

```go
DestinationAddressEnd *string
```

- *Type:* *string

The destination address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#destination_address_end FirewallRules#destination_address_end}

---

##### `DestinationAddressStart`<sup>Optional</sup> <a name="DestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart"></a>

```go
DestinationAddressStart *string
```

- *Type:* *string

The destination address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#destination_address_start FirewallRules#destination_address_start}

---

##### `DestinationPortEnd`<sup>Optional</sup> <a name="DestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd"></a>

```go
DestinationPortEnd *string
```

- *Type:* *string

The destination port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#destination_port_end FirewallRules#destination_port_end}

---

##### `DestinationPortStart`<sup>Optional</sup> <a name="DestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart"></a>

```go
DestinationPortStart *string
```

- *Type:* *string

The destination port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#destination_port_start FirewallRules#destination_port_start}

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family"></a>

```go
Family *string
```

- *Type:* *string

The address family of new firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#family FirewallRules#family}

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType"></a>

```go
IcmpType *string
```

- *Type:* *string

The ICMP type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#icmp_type FirewallRules#icmp_type}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#protocol FirewallRules#protocol}

---

##### `SourceAddressEnd`<sup>Optional</sup> <a name="SourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd"></a>

```go
SourceAddressEnd *string
```

- *Type:* *string

The source address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#source_address_end FirewallRules#source_address_end}

---

##### `SourceAddressStart`<sup>Optional</sup> <a name="SourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart"></a>

```go
SourceAddressStart *string
```

- *Type:* *string

The source address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#source_address_start FirewallRules#source_address_start}

---

##### `SourcePortEnd`<sup>Optional</sup> <a name="SourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd"></a>

```go
SourcePortEnd *string
```

- *Type:* *string

The source port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#source_port_end FirewallRules#source_port_end}

---

##### `SourcePortStart`<sup>Optional</sup> <a name="SourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart"></a>

```go
SourcePortStart *string
```

- *Type:* *string

The source port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/firewall_rules#source_port_start FirewallRules#source_port_start}

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallRulesFirewallRuleList <a name="FirewallRulesFirewallRuleList" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.NewFirewallRulesFirewallRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirewallRulesFirewallRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get"></a>

```go
func Get(index *f64) FirewallRulesFirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirewallRulesFirewallRuleOutputReference <a name="FirewallRulesFirewallRuleOutputReference" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/firewallrules"

firewallrules.NewFirewallRulesFirewallRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirewallRulesFirewallRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd">ResetDestinationAddressEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart">ResetDestinationAddressStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd">ResetDestinationPortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart">ResetDestinationPortStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily">ResetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd">ResetSourceAddressEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart">ResetSourceAddressStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd">ResetSourcePortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart">ResetSourcePortStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDestinationAddressEnd` <a name="ResetDestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd"></a>

```go
func ResetDestinationAddressEnd()
```

##### `ResetDestinationAddressStart` <a name="ResetDestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart"></a>

```go
func ResetDestinationAddressStart()
```

##### `ResetDestinationPortEnd` <a name="ResetDestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd"></a>

```go
func ResetDestinationPortEnd()
```

##### `ResetDestinationPortStart` <a name="ResetDestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart"></a>

```go
func ResetDestinationPortStart()
```

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily"></a>

```go
func ResetFamily()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSourceAddressEnd` <a name="ResetSourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd"></a>

```go
func ResetSourceAddressEnd()
```

##### `ResetSourceAddressStart` <a name="ResetSourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart"></a>

```go
func ResetSourceAddressStart()
```

##### `ResetSourcePortEnd` <a name="ResetSourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd"></a>

```go
func ResetSourcePortEnd()
```

##### `ResetSourcePortStart` <a name="ResetSourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart"></a>

```go
func ResetSourcePortStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput">DestinationAddressEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput">DestinationAddressStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput">DestinationPortEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput">DestinationPortStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput">SourceAddressEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput">SourceAddressStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput">SourcePortEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput">SourcePortStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd">DestinationAddressEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart">DestinationAddressStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd">DestinationPortEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart">DestinationPortStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType">IcmpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd">SourceAddressEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart">SourceAddressStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd">SourcePortEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart">SourcePortStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DestinationAddressEndInput`<sup>Optional</sup> <a name="DestinationAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput"></a>

```go
func DestinationAddressEndInput() *string
```

- *Type:* *string

---

##### `DestinationAddressStartInput`<sup>Optional</sup> <a name="DestinationAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput"></a>

```go
func DestinationAddressStartInput() *string
```

- *Type:* *string

---

##### `DestinationPortEndInput`<sup>Optional</sup> <a name="DestinationPortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput"></a>

```go
func DestinationPortEndInput() *string
```

- *Type:* *string

---

##### `DestinationPortStartInput`<sup>Optional</sup> <a name="DestinationPortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput"></a>

```go
func DestinationPortStartInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceAddressEndInput`<sup>Optional</sup> <a name="SourceAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput"></a>

```go
func SourceAddressEndInput() *string
```

- *Type:* *string

---

##### `SourceAddressStartInput`<sup>Optional</sup> <a name="SourceAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput"></a>

```go
func SourceAddressStartInput() *string
```

- *Type:* *string

---

##### `SourcePortEndInput`<sup>Optional</sup> <a name="SourcePortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput"></a>

```go
func SourcePortEndInput() *string
```

- *Type:* *string

---

##### `SourcePortStartInput`<sup>Optional</sup> <a name="SourcePortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput"></a>

```go
func SourcePortStartInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DestinationAddressEnd`<sup>Required</sup> <a name="DestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd"></a>

```go
func DestinationAddressEnd() *string
```

- *Type:* *string

---

##### `DestinationAddressStart`<sup>Required</sup> <a name="DestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart"></a>

```go
func DestinationAddressStart() *string
```

- *Type:* *string

---

##### `DestinationPortEnd`<sup>Required</sup> <a name="DestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd"></a>

```go
func DestinationPortEnd() *string
```

- *Type:* *string

---

##### `DestinationPortStart`<sup>Required</sup> <a name="DestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart"></a>

```go
func DestinationPortStart() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType"></a>

```go
func IcmpType() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceAddressEnd`<sup>Required</sup> <a name="SourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd"></a>

```go
func SourceAddressEnd() *string
```

- *Type:* *string

---

##### `SourceAddressStart`<sup>Required</sup> <a name="SourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart"></a>

```go
func SourceAddressStart() *string
```

- *Type:* *string

---

##### `SourcePortEnd`<sup>Required</sup> <a name="SourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd"></a>

```go
func SourcePortEnd() *string
```

- *Type:* *string

---

##### `SourcePortStart`<sup>Required</sup> <a name="SourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart"></a>

```go
func SourcePortStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



