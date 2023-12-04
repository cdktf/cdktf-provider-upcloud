# `firewallRules` Submodule <a name="`firewallRules` Submodule" id="@cdktf/provider-upcloud.firewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallRules <a name="FirewallRules" id="@cdktf/provider-upcloud.firewallRules.FirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules upcloud_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FirewallRules(Construct Scope, string Id, FirewallRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig">FirewallRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFirewallRule` <a name="PutFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule"></a>

```csharp
private void PutFirewallRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId"></a>

```csharp
private void ResetId()
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

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FirewallRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FirewallRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FirewallRules.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

FirewallRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule">FirewallRule</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput">FirewallRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FirewallRule`<sup>Required</sup> <a name="FirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule"></a>

```csharp
public FirewallRulesFirewallRuleList FirewallRule { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a>

---

##### `FirewallRuleInput`<sup>Optional</sup> <a name="FirewallRuleInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput"></a>

```csharp
public object FirewallRuleInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallRulesConfig <a name="FirewallRulesConfig" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FirewallRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object FirewallRule,
    string ServerId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule">FirewallRule</a></code> | <code>object</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId">ServerId</a></code> | <code>string</code> | The unique id of the server to be protected the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#id FirewallRules#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallRule`<sup>Required</sup> <a name="FirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule"></a>

```csharp
public object FirewallRule { get; set; }
```

- *Type:* object

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

The unique id of the server to be protected the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#id FirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FirewallRulesFirewallRule <a name="FirewallRulesFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FirewallRulesFirewallRule {
    string Action,
    string Direction,
    string Comment = null,
    string DestinationAddressEnd = null,
    string DestinationAddressStart = null,
    string DestinationPortEnd = null,
    string DestinationPortStart = null,
    string Family = null,
    string IcmpType = null,
    string Protocol = null,
    string SourceAddressEnd = null,
    string SourceAddressStart = null,
    string SourcePortEnd = null,
    string SourcePortStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action">Action</a></code> | <code>string</code> | Action to take if the rule conditions are met. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction">Direction</a></code> | <code>string</code> | The direction of network traffic this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment">Comment</a></code> | <code>string</code> | Freeform comment string for the rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd">DestinationAddressEnd</a></code> | <code>string</code> | The destination address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart">DestinationAddressStart</a></code> | <code>string</code> | The destination address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd">DestinationPortEnd</a></code> | <code>string</code> | The destination port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart">DestinationPortStart</a></code> | <code>string</code> | The destination port range starts from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family">Family</a></code> | <code>string</code> | The address family of new firewall rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType">IcmpType</a></code> | <code>string</code> | The ICMP type. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol">Protocol</a></code> | <code>string</code> | The protocol this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd">SourceAddressEnd</a></code> | <code>string</code> | The source address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart">SourceAddressStart</a></code> | <code>string</code> | The source address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd">SourcePortEnd</a></code> | <code>string</code> | The source port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart">SourcePortStart</a></code> | <code>string</code> | The source port range starts from this port number. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Action to take if the rule conditions are met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#action FirewallRules#action}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction of network traffic this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#direction FirewallRules#direction}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Freeform comment string for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#comment FirewallRules#comment}

---

##### `DestinationAddressEnd`<sup>Optional</sup> <a name="DestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd"></a>

```csharp
public string DestinationAddressEnd { get; set; }
```

- *Type:* string

The destination address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#destination_address_end FirewallRules#destination_address_end}

---

##### `DestinationAddressStart`<sup>Optional</sup> <a name="DestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart"></a>

```csharp
public string DestinationAddressStart { get; set; }
```

- *Type:* string

The destination address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#destination_address_start FirewallRules#destination_address_start}

---

##### `DestinationPortEnd`<sup>Optional</sup> <a name="DestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd"></a>

```csharp
public string DestinationPortEnd { get; set; }
```

- *Type:* string

The destination port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#destination_port_end FirewallRules#destination_port_end}

---

##### `DestinationPortStart`<sup>Optional</sup> <a name="DestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart"></a>

```csharp
public string DestinationPortStart { get; set; }
```

- *Type:* string

The destination port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#destination_port_start FirewallRules#destination_port_start}

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

The address family of new firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#family FirewallRules#family}

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType"></a>

```csharp
public string IcmpType { get; set; }
```

- *Type:* string

The ICMP type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#icmp_type FirewallRules#icmp_type}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#protocol FirewallRules#protocol}

---

##### `SourceAddressEnd`<sup>Optional</sup> <a name="SourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd"></a>

```csharp
public string SourceAddressEnd { get; set; }
```

- *Type:* string

The source address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#source_address_end FirewallRules#source_address_end}

---

##### `SourceAddressStart`<sup>Optional</sup> <a name="SourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart"></a>

```csharp
public string SourceAddressStart { get; set; }
```

- *Type:* string

The source address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#source_address_start FirewallRules#source_address_start}

---

##### `SourcePortEnd`<sup>Optional</sup> <a name="SourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd"></a>

```csharp
public string SourcePortEnd { get; set; }
```

- *Type:* string

The source port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#source_port_end FirewallRules#source_port_end}

---

##### `SourcePortStart`<sup>Optional</sup> <a name="SourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart"></a>

```csharp
public string SourcePortStart { get; set; }
```

- *Type:* string

The source port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/firewall_rules#source_port_start FirewallRules#source_port_start}

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallRulesFirewallRuleList <a name="FirewallRulesFirewallRuleList" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FirewallRulesFirewallRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get"></a>

```csharp
private FirewallRulesFirewallRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirewallRulesFirewallRuleOutputReference <a name="FirewallRulesFirewallRuleOutputReference" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new FirewallRulesFirewallRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDestinationAddressEnd` <a name="ResetDestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd"></a>

```csharp
private void ResetDestinationAddressEnd()
```

##### `ResetDestinationAddressStart` <a name="ResetDestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart"></a>

```csharp
private void ResetDestinationAddressStart()
```

##### `ResetDestinationPortEnd` <a name="ResetDestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd"></a>

```csharp
private void ResetDestinationPortEnd()
```

##### `ResetDestinationPortStart` <a name="ResetDestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart"></a>

```csharp
private void ResetDestinationPortStart()
```

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily"></a>

```csharp
private void ResetFamily()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSourceAddressEnd` <a name="ResetSourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd"></a>

```csharp
private void ResetSourceAddressEnd()
```

##### `ResetSourceAddressStart` <a name="ResetSourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart"></a>

```csharp
private void ResetSourceAddressStart()
```

##### `ResetSourcePortEnd` <a name="ResetSourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd"></a>

```csharp
private void ResetSourcePortEnd()
```

##### `ResetSourcePortStart` <a name="ResetSourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart"></a>

```csharp
private void ResetSourcePortStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput">DestinationAddressEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput">DestinationAddressStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput">DestinationPortEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput">DestinationPortStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput">SourceAddressEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput">SourceAddressStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput">SourcePortEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput">SourcePortStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd">DestinationAddressEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart">DestinationAddressStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd">DestinationPortEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart">DestinationPortStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType">IcmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd">SourceAddressEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart">SourceAddressStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd">SourcePortEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart">SourcePortStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DestinationAddressEndInput`<sup>Optional</sup> <a name="DestinationAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput"></a>

```csharp
public string DestinationAddressEndInput { get; }
```

- *Type:* string

---

##### `DestinationAddressStartInput`<sup>Optional</sup> <a name="DestinationAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput"></a>

```csharp
public string DestinationAddressStartInput { get; }
```

- *Type:* string

---

##### `DestinationPortEndInput`<sup>Optional</sup> <a name="DestinationPortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput"></a>

```csharp
public string DestinationPortEndInput { get; }
```

- *Type:* string

---

##### `DestinationPortStartInput`<sup>Optional</sup> <a name="DestinationPortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput"></a>

```csharp
public string DestinationPortStartInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput"></a>

```csharp
public string IcmpTypeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceAddressEndInput`<sup>Optional</sup> <a name="SourceAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput"></a>

```csharp
public string SourceAddressEndInput { get; }
```

- *Type:* string

---

##### `SourceAddressStartInput`<sup>Optional</sup> <a name="SourceAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput"></a>

```csharp
public string SourceAddressStartInput { get; }
```

- *Type:* string

---

##### `SourcePortEndInput`<sup>Optional</sup> <a name="SourcePortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput"></a>

```csharp
public string SourcePortEndInput { get; }
```

- *Type:* string

---

##### `SourcePortStartInput`<sup>Optional</sup> <a name="SourcePortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput"></a>

```csharp
public string SourcePortStartInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DestinationAddressEnd`<sup>Required</sup> <a name="DestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd"></a>

```csharp
public string DestinationAddressEnd { get; }
```

- *Type:* string

---

##### `DestinationAddressStart`<sup>Required</sup> <a name="DestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart"></a>

```csharp
public string DestinationAddressStart { get; }
```

- *Type:* string

---

##### `DestinationPortEnd`<sup>Required</sup> <a name="DestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd"></a>

```csharp
public string DestinationPortEnd { get; }
```

- *Type:* string

---

##### `DestinationPortStart`<sup>Required</sup> <a name="DestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart"></a>

```csharp
public string DestinationPortStart { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType"></a>

```csharp
public string IcmpType { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceAddressEnd`<sup>Required</sup> <a name="SourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd"></a>

```csharp
public string SourceAddressEnd { get; }
```

- *Type:* string

---

##### `SourceAddressStart`<sup>Required</sup> <a name="SourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart"></a>

```csharp
public string SourceAddressStart { get; }
```

- *Type:* string

---

##### `SourcePortEnd`<sup>Required</sup> <a name="SourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd"></a>

```csharp
public string SourcePortEnd { get; }
```

- *Type:* string

---

##### `SourcePortStart`<sup>Required</sup> <a name="SourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart"></a>

```csharp
public string SourcePortStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



