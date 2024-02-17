# `loadbalancerFrontendRule` Submodule <a name="`loadbalancerFrontendRule` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontendRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontendRule <a name="LoadbalancerFrontendRule" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule upcloud_loadbalancer_frontend_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRule(Construct Scope, string Id, LoadbalancerFrontendRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig">LoadbalancerFrontendRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig">LoadbalancerFrontendRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putMatchers">PutMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetMatchers">ResetMatchers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putActions"></a>

```csharp
private void PutActions(LoadbalancerFrontendRuleActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>

---

##### `PutMatchers` <a name="PutMatchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putMatchers"></a>

```csharp
private void PutMatchers(LoadbalancerFrontendRuleMatchers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMatchers` <a name="ResetMatchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetMatchers"></a>

```csharp
private void ResetMatchers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerFrontendRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadbalancerFrontendRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerFrontendRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerFrontendRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerFrontendRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference">LoadbalancerFrontendRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchers">Matchers</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference">LoadbalancerFrontendRuleMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontendInput">FrontendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchersInput">MatchersInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontend">Frontend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actions"></a>

```csharp
public LoadbalancerFrontendRuleActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference">LoadbalancerFrontendRuleActionsOutputReference</a>

---

##### `Matchers`<sup>Required</sup> <a name="Matchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchers"></a>

```csharp
public LoadbalancerFrontendRuleMatchersOutputReference Matchers { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference">LoadbalancerFrontendRuleMatchersOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actionsInput"></a>

```csharp
public LoadbalancerFrontendRuleActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>

---

##### `FrontendInput`<sup>Optional</sup> <a name="FrontendInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontendInput"></a>

```csharp
public string FrontendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchersInput`<sup>Optional</sup> <a name="MatchersInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchersInput"></a>

```csharp
public LoadbalancerFrontendRuleMatchers MatchersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Frontend`<sup>Required</sup> <a name="Frontend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontend"></a>

```csharp
public string Frontend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendRuleActions <a name="LoadbalancerFrontendRuleActions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActions {
    object HttpRedirect = null,
    object HttpReturn = null,
    object SetForwardedHeaders = null,
    object TcpReject = null,
    object UseBackend = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpRedirect">HttpRedirect</a></code> | <code>object</code> | http_redirect block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpReturn">HttpReturn</a></code> | <code>object</code> | http_return block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setForwardedHeaders">SetForwardedHeaders</a></code> | <code>object</code> | set_forwarded_headers block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.tcpReject">TcpReject</a></code> | <code>object</code> | tcp_reject block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.useBackend">UseBackend</a></code> | <code>object</code> | use_backend block. |

---

##### `HttpRedirect`<sup>Optional</sup> <a name="HttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpRedirect"></a>

```csharp
public object HttpRedirect { get; set; }
```

- *Type:* object

http_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#http_redirect LoadbalancerFrontendRule#http_redirect}

---

##### `HttpReturn`<sup>Optional</sup> <a name="HttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpReturn"></a>

```csharp
public object HttpReturn { get; set; }
```

- *Type:* object

http_return block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#http_return LoadbalancerFrontendRule#http_return}

---

##### `SetForwardedHeaders`<sup>Optional</sup> <a name="SetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setForwardedHeaders"></a>

```csharp
public object SetForwardedHeaders { get; set; }
```

- *Type:* object

set_forwarded_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#set_forwarded_headers LoadbalancerFrontendRule#set_forwarded_headers}

---

##### `TcpReject`<sup>Optional</sup> <a name="TcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.tcpReject"></a>

```csharp
public object TcpReject { get; set; }
```

- *Type:* object

tcp_reject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#tcp_reject LoadbalancerFrontendRule#tcp_reject}

---

##### `UseBackend`<sup>Optional</sup> <a name="UseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.useBackend"></a>

```csharp
public object UseBackend { get; set; }
```

- *Type:* object

use_backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#use_backend LoadbalancerFrontendRule#use_backend}

---

### LoadbalancerFrontendRuleActionsHttpRedirect <a name="LoadbalancerFrontendRuleActionsHttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsHttpRedirect {
    string Location = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.location">Location</a></code> | <code>string</code> | Target location. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.scheme">Scheme</a></code> | <code>string</code> | Target scheme. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Target location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#location LoadbalancerFrontendRule#location}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Target scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#scheme LoadbalancerFrontendRule#scheme}

---

### LoadbalancerFrontendRuleActionsHttpReturn <a name="LoadbalancerFrontendRuleActionsHttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsHttpReturn {
    string ContentType,
    string Payload,
    double Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.contentType">ContentType</a></code> | <code>string</code> | Content type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.payload">Payload</a></code> | <code>string</code> | The payload. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.status">Status</a></code> | <code>double</code> | HTTP status code. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Content type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#content_type LoadbalancerFrontendRule#content_type}

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.payload"></a>

```csharp
public string Payload { get; set; }
```

- *Type:* string

The payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#payload LoadbalancerFrontendRule#payload}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.status"></a>

```csharp
public double Status { get; set; }
```

- *Type:* double

HTTP status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#status LoadbalancerFrontendRule#status}

---

### LoadbalancerFrontendRuleActionsSetForwardedHeaders <a name="LoadbalancerFrontendRuleActionsSetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsSetForwardedHeaders {
    object Active = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}. |

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}.

---

### LoadbalancerFrontendRuleActionsTcpReject <a name="LoadbalancerFrontendRuleActionsTcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsTcpReject {
    object Active = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}. |

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}.

---

### LoadbalancerFrontendRuleActionsUseBackend <a name="LoadbalancerFrontendRuleActionsUseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsUseBackend {
    string BackendName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend.property.backendName">BackendName</a></code> | <code>string</code> | The name of the backend where traffic will be routed. |

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend.property.backendName"></a>

```csharp
public string BackendName { get; set; }
```

- *Type:* string

The name of the backend where traffic will be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}

---

### LoadbalancerFrontendRuleConfig <a name="LoadbalancerFrontendRuleConfig" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Frontend,
    string Name,
    double Priority,
    LoadbalancerFrontendRuleActions Actions = null,
    string Id = null,
    LoadbalancerFrontendRuleMatchers Matchers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.frontend">Frontend</a></code> | <code>string</code> | ID of the load balancer frontend to which the rule is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the frontend rule must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Rule with the higher priority goes first. Rules with the same priority processed in alphabetical order. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#id LoadbalancerFrontendRule#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.matchers">Matchers</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a></code> | matchers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Frontend`<sup>Required</sup> <a name="Frontend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.frontend"></a>

```csharp
public string Frontend { get; set; }
```

- *Type:* string

ID of the load balancer frontend to which the rule is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#frontend LoadbalancerFrontendRule#frontend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the frontend rule must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Rule with the higher priority goes first. Rules with the same priority processed in alphabetical order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#priority LoadbalancerFrontendRule#priority}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.actions"></a>

```csharp
public LoadbalancerFrontendRuleActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#actions LoadbalancerFrontendRule#actions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#id LoadbalancerFrontendRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Matchers`<sup>Optional</sup> <a name="Matchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.matchers"></a>

```csharp
public LoadbalancerFrontendRuleMatchers Matchers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>

matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#matchers LoadbalancerFrontendRule#matchers}

---

### LoadbalancerFrontendRuleMatchers <a name="LoadbalancerFrontendRuleMatchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchers {
    object BodySize = null,
    object BodySizeRange = null,
    object Cookie = null,
    object Header = null,
    object Host = null,
    object HttpMethod = null,
    object NumMembersUp = null,
    object Path = null,
    object SrcIp = null,
    object SrcPort = null,
    object SrcPortRange = null,
    object Url = null,
    object UrlParam = null,
    object UrlQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySize">BodySize</a></code> | <code>object</code> | body_size block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySizeRange">BodySizeRange</a></code> | <code>object</code> | body_size_range block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.cookie">Cookie</a></code> | <code>object</code> | cookie block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.host">Host</a></code> | <code>object</code> | host block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpMethod">HttpMethod</a></code> | <code>object</code> | http_method block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.numMembersUp">NumMembersUp</a></code> | <code>object</code> | num_members_up block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.path">Path</a></code> | <code>object</code> | path block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcIp">SrcIp</a></code> | <code>object</code> | src_ip block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPort">SrcPort</a></code> | <code>object</code> | src_port block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPortRange">SrcPortRange</a></code> | <code>object</code> | src_port_range block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.url">Url</a></code> | <code>object</code> | url block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlParam">UrlParam</a></code> | <code>object</code> | url_param block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlQuery">UrlQuery</a></code> | <code>object</code> | url_query block. |

---

##### `BodySize`<sup>Optional</sup> <a name="BodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySize"></a>

```csharp
public object BodySize { get; set; }
```

- *Type:* object

body_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#body_size LoadbalancerFrontendRule#body_size}

---

##### `BodySizeRange`<sup>Optional</sup> <a name="BodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySizeRange"></a>

```csharp
public object BodySizeRange { get; set; }
```

- *Type:* object

body_size_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#body_size_range LoadbalancerFrontendRule#body_size_range}

---

##### `Cookie`<sup>Optional</sup> <a name="Cookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.cookie"></a>

```csharp
public object Cookie { get; set; }
```

- *Type:* object

cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#cookie LoadbalancerFrontendRule#cookie}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.host"></a>

```csharp
public object Host { get; set; }
```

- *Type:* object

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#host LoadbalancerFrontendRule#host}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpMethod"></a>

```csharp
public object HttpMethod { get; set; }
```

- *Type:* object

http_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#http_method LoadbalancerFrontendRule#http_method}

---

##### `NumMembersUp`<sup>Optional</sup> <a name="NumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.numMembersUp"></a>

```csharp
public object NumMembersUp { get; set; }
```

- *Type:* object

num_members_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#num_members_up LoadbalancerFrontendRule#num_members_up}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.path"></a>

```csharp
public object Path { get; set; }
```

- *Type:* object

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#path LoadbalancerFrontendRule#path}

---

##### `SrcIp`<sup>Optional</sup> <a name="SrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcIp"></a>

```csharp
public object SrcIp { get; set; }
```

- *Type:* object

src_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#src_ip LoadbalancerFrontendRule#src_ip}

---

##### `SrcPort`<sup>Optional</sup> <a name="SrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPort"></a>

```csharp
public object SrcPort { get; set; }
```

- *Type:* object

src_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#src_port LoadbalancerFrontendRule#src_port}

---

##### `SrcPortRange`<sup>Optional</sup> <a name="SrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPortRange"></a>

```csharp
public object SrcPortRange { get; set; }
```

- *Type:* object

src_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#src_port_range LoadbalancerFrontendRule#src_port_range}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.url"></a>

```csharp
public object Url { get; set; }
```

- *Type:* object

url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#url LoadbalancerFrontendRule#url}

---

##### `UrlParam`<sup>Optional</sup> <a name="UrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlParam"></a>

```csharp
public object UrlParam { get; set; }
```

- *Type:* object

url_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#url_param LoadbalancerFrontendRule#url_param}

---

##### `UrlQuery`<sup>Optional</sup> <a name="UrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlQuery"></a>

```csharp
public object UrlQuery { get; set; }
```

- *Type:* object

url_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#url_query LoadbalancerFrontendRule#url_query}

---

### LoadbalancerFrontendRuleMatchersBodySize <a name="LoadbalancerFrontendRuleMatchersBodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersBodySize {
    string Method,
    double Value,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.method">Method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.value">Value</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersBodySizeRange <a name="LoadbalancerFrontendRuleMatchersBodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersBodySizeRange {
    double RangeEnd,
    double RangeStart,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeEnd">RangeEnd</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeStart">RangeStart</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `RangeEnd`<sup>Required</sup> <a name="RangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeEnd"></a>

```csharp
public double RangeEnd { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}

---

##### `RangeStart`<sup>Required</sup> <a name="RangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeStart"></a>

```csharp
public double RangeStart { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersCookie <a name="LoadbalancerFrontendRuleMatchersCookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersCookie {
    string Method,
    string Name,
    object IgnoreCase = null,
    object Inverse = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.method">Method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.name">Name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Ignore case, default `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.value">Value</a></code> | <code>string</code> | String value. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Ignore case, default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersHeader <a name="LoadbalancerFrontendRuleMatchersHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHeader {
    string Method,
    string Name,
    object IgnoreCase = null,
    object Inverse = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.method">Method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.name">Name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Ignore case, default `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.value">Value</a></code> | <code>string</code> | String value. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Ignore case, default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersHost <a name="LoadbalancerFrontendRuleMatchersHost" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHost {
    string Value,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.value">Value</a></code> | <code>string</code> | String value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersHttpMethod <a name="LoadbalancerFrontendRuleMatchersHttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHttpMethod {
    string Value,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.value">Value</a></code> | <code>string</code> | String value (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersNumMembersUp <a name="LoadbalancerFrontendRuleMatchersNumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersNumMembersUp {
    string BackendName,
    string Method,
    double Value,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.backendName">BackendName</a></code> | <code>string</code> | The name of the `backend` which members will be monitored. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.method">Method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.value">Value</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.backendName"></a>

```csharp
public string BackendName { get; set; }
```

- *Type:* string

The name of the `backend` which members will be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersPath <a name="LoadbalancerFrontendRuleMatchersPath" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersPath {
    string Method,
    object IgnoreCase = null,
    object Inverse = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.method">Method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Ignore case, default `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.value">Value</a></code> | <code>string</code> | String value. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Ignore case, default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersSrcIp <a name="LoadbalancerFrontendRuleMatchersSrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcIp {
    string Value,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.value">Value</a></code> | <code>string</code> | IP address. CIDR masks are supported, e.g. `192.168.0.0/24`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

IP address. CIDR masks are supported, e.g. `192.168.0.0/24`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersSrcPort <a name="LoadbalancerFrontendRuleMatchersSrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcPort {
    string Method,
    double Value,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.method">Method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.value">Value</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersSrcPortRange <a name="LoadbalancerFrontendRuleMatchersSrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcPortRange {
    double RangeEnd,
    double RangeStart,
    object Inverse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeEnd">RangeEnd</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeStart">RangeStart</a></code> | <code>double</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |

---

##### `RangeEnd`<sup>Required</sup> <a name="RangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeEnd"></a>

```csharp
public double RangeEnd { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}

---

##### `RangeStart`<sup>Required</sup> <a name="RangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeStart"></a>

```csharp
public double RangeStart { get; set; }
```

- *Type:* double

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersUrl <a name="LoadbalancerFrontendRuleMatchersUrl" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrl {
    string Method,
    object IgnoreCase = null,
    object Inverse = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.method">Method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Ignore case, default `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.value">Value</a></code> | <code>string</code> | String value. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Ignore case, default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersUrlParam <a name="LoadbalancerFrontendRuleMatchersUrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlParam {
    string Method,
    string Name,
    object IgnoreCase = null,
    object Inverse = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.method">Method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.name">Name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Ignore case, default `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.value">Value</a></code> | <code>string</code> | String value. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Ignore case, default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersUrlQuery <a name="LoadbalancerFrontendRuleMatchersUrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlQuery {
    string Method,
    object IgnoreCase = null,
    object Inverse = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.method">Method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | Ignore case, default `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.inverse">Inverse</a></code> | <code>object</code> | Sets if the condition should be inverted. Works similar to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.value">Value</a></code> | <code>string</code> | String value. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; set; }
```

- *Type:* object

Ignore case, default `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `Inverse`<sup>Optional</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.inverse"></a>

```csharp
public object Inverse { get; set; }
```

- *Type:* object

Sets if the condition should be inverted. Works similar to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/4.1.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendRuleActionsHttpRedirectList <a name="LoadbalancerFrontendRuleActionsHttpRedirectList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsHttpRedirectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.get"></a>

```csharp
private LoadbalancerFrontendRuleActionsHttpRedirectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsHttpRedirectOutputReference <a name="LoadbalancerFrontendRuleActionsHttpRedirectOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsHttpRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsHttpReturnList <a name="LoadbalancerFrontendRuleActionsHttpReturnList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsHttpReturnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.get"></a>

```csharp
private LoadbalancerFrontendRuleActionsHttpReturnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsHttpReturnOutputReference <a name="LoadbalancerFrontendRuleActionsHttpReturnOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsHttpReturnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payloadInput">PayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.statusInput">StatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payloadInput"></a>

```csharp
public string PayloadInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.statusInput"></a>

```csharp
public double StatusInput { get; }
```

- *Type:* double

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsOutputReference <a name="LoadbalancerFrontendRuleActionsOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpRedirect">PutHttpRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpReturn">PutHttpReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetForwardedHeaders">PutSetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putTcpReject">PutTcpReject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putUseBackend">PutUseBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpRedirect">ResetHttpRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpReturn">ResetHttpReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetForwardedHeaders">ResetSetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetTcpReject">ResetTcpReject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetUseBackend">ResetUseBackend</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpRedirect` <a name="PutHttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpRedirect"></a>

```csharp
private void PutHttpRedirect(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpRedirect.parameter.value"></a>

- *Type:* object

---

##### `PutHttpReturn` <a name="PutHttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpReturn"></a>

```csharp
private void PutHttpReturn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpReturn.parameter.value"></a>

- *Type:* object

---

##### `PutSetForwardedHeaders` <a name="PutSetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetForwardedHeaders"></a>

```csharp
private void PutSetForwardedHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetForwardedHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutTcpReject` <a name="PutTcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putTcpReject"></a>

```csharp
private void PutTcpReject(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putTcpReject.parameter.value"></a>

- *Type:* object

---

##### `PutUseBackend` <a name="PutUseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putUseBackend"></a>

```csharp
private void PutUseBackend(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putUseBackend.parameter.value"></a>

- *Type:* object

---

##### `ResetHttpRedirect` <a name="ResetHttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpRedirect"></a>

```csharp
private void ResetHttpRedirect()
```

##### `ResetHttpReturn` <a name="ResetHttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpReturn"></a>

```csharp
private void ResetHttpReturn()
```

##### `ResetSetForwardedHeaders` <a name="ResetSetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetForwardedHeaders"></a>

```csharp
private void ResetSetForwardedHeaders()
```

##### `ResetTcpReject` <a name="ResetTcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetTcpReject"></a>

```csharp
private void ResetTcpReject()
```

##### `ResetUseBackend` <a name="ResetUseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetUseBackend"></a>

```csharp
private void ResetUseBackend()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirect">HttpRedirect</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList">LoadbalancerFrontendRuleActionsHttpRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturn">HttpReturn</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList">LoadbalancerFrontendRuleActionsHttpReturnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeaders">SetForwardedHeaders</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList">LoadbalancerFrontendRuleActionsSetForwardedHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpReject">TcpReject</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList">LoadbalancerFrontendRuleActionsTcpRejectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackend">UseBackend</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList">LoadbalancerFrontendRuleActionsUseBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirectInput">HttpRedirectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturnInput">HttpReturnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeadersInput">SetForwardedHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpRejectInput">TcpRejectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackendInput">UseBackendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpRedirect`<sup>Required</sup> <a name="HttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirect"></a>

```csharp
public LoadbalancerFrontendRuleActionsHttpRedirectList HttpRedirect { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList">LoadbalancerFrontendRuleActionsHttpRedirectList</a>

---

##### `HttpReturn`<sup>Required</sup> <a name="HttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturn"></a>

```csharp
public LoadbalancerFrontendRuleActionsHttpReturnList HttpReturn { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList">LoadbalancerFrontendRuleActionsHttpReturnList</a>

---

##### `SetForwardedHeaders`<sup>Required</sup> <a name="SetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeaders"></a>

```csharp
public LoadbalancerFrontendRuleActionsSetForwardedHeadersList SetForwardedHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList">LoadbalancerFrontendRuleActionsSetForwardedHeadersList</a>

---

##### `TcpReject`<sup>Required</sup> <a name="TcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpReject"></a>

```csharp
public LoadbalancerFrontendRuleActionsTcpRejectList TcpReject { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList">LoadbalancerFrontendRuleActionsTcpRejectList</a>

---

##### `UseBackend`<sup>Required</sup> <a name="UseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackend"></a>

```csharp
public LoadbalancerFrontendRuleActionsUseBackendList UseBackend { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList">LoadbalancerFrontendRuleActionsUseBackendList</a>

---

##### `HttpRedirectInput`<sup>Optional</sup> <a name="HttpRedirectInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirectInput"></a>

```csharp
public object HttpRedirectInput { get; }
```

- *Type:* object

---

##### `HttpReturnInput`<sup>Optional</sup> <a name="HttpReturnInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturnInput"></a>

```csharp
public object HttpReturnInput { get; }
```

- *Type:* object

---

##### `SetForwardedHeadersInput`<sup>Optional</sup> <a name="SetForwardedHeadersInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeadersInput"></a>

```csharp
public object SetForwardedHeadersInput { get; }
```

- *Type:* object

---

##### `TcpRejectInput`<sup>Optional</sup> <a name="TcpRejectInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpRejectInput"></a>

```csharp
public object TcpRejectInput { get; }
```

- *Type:* object

---

##### `UseBackendInput`<sup>Optional</sup> <a name="UseBackendInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackendInput"></a>

```csharp
public object UseBackendInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerFrontendRuleActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>

---


### LoadbalancerFrontendRuleActionsSetForwardedHeadersList <a name="LoadbalancerFrontendRuleActionsSetForwardedHeadersList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsSetForwardedHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.get"></a>

```csharp
private LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference <a name="LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resetActive">ResetActive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resetActive"></a>

```csharp
private void ResetActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsTcpRejectList <a name="LoadbalancerFrontendRuleActionsTcpRejectList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsTcpRejectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.get"></a>

```csharp
private LoadbalancerFrontendRuleActionsTcpRejectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsTcpRejectOutputReference <a name="LoadbalancerFrontendRuleActionsTcpRejectOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsTcpRejectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resetActive">ResetActive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resetActive"></a>

```csharp
private void ResetActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsUseBackendList <a name="LoadbalancerFrontendRuleActionsUseBackendList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsUseBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.get"></a>

```csharp
private LoadbalancerFrontendRuleActionsUseBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleActionsUseBackendOutputReference <a name="LoadbalancerFrontendRuleActionsUseBackendOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleActionsUseBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendNameInput">BackendNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendName">BackendName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendNameInput`<sup>Optional</sup> <a name="BackendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendNameInput"></a>

```csharp
public string BackendNameInput { get; }
```

- *Type:* string

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendName"></a>

```csharp
public string BackendName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersBodySizeList <a name="LoadbalancerFrontendRuleMatchersBodySizeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersBodySizeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersBodySizeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersBodySizeOutputReference <a name="LoadbalancerFrontendRuleMatchersBodySizeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersBodySizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersBodySizeRangeList <a name="LoadbalancerFrontendRuleMatchersBodySizeRangeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersBodySizeRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference <a name="LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEndInput">RangeEndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStartInput">RangeStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEnd">RangeEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStart">RangeStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `RangeEndInput`<sup>Optional</sup> <a name="RangeEndInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEndInput"></a>

```csharp
public double RangeEndInput { get; }
```

- *Type:* double

---

##### `RangeStartInput`<sup>Optional</sup> <a name="RangeStartInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStartInput"></a>

```csharp
public double RangeStartInput { get; }
```

- *Type:* double

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `RangeEnd`<sup>Required</sup> <a name="RangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEnd"></a>

```csharp
public double RangeEnd { get; }
```

- *Type:* double

---

##### `RangeStart`<sup>Required</sup> <a name="RangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStart"></a>

```csharp
public double RangeStart { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersCookieList <a name="LoadbalancerFrontendRuleMatchersCookieList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersCookieOutputReference <a name="LoadbalancerFrontendRuleMatchersCookieOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersHeaderList <a name="LoadbalancerFrontendRuleMatchersHeaderList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersHeaderOutputReference <a name="LoadbalancerFrontendRuleMatchersHeaderOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersHostList <a name="LoadbalancerFrontendRuleMatchersHostList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersHostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersHostOutputReference <a name="LoadbalancerFrontendRuleMatchersHostOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersHttpMethodList <a name="LoadbalancerFrontendRuleMatchersHttpMethodList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHttpMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersHttpMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersHttpMethodOutputReference <a name="LoadbalancerFrontendRuleMatchersHttpMethodOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersHttpMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersNumMembersUpList <a name="LoadbalancerFrontendRuleMatchersNumMembersUpList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersNumMembersUpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference <a name="LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendNameInput">BackendNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendName">BackendName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendNameInput`<sup>Optional</sup> <a name="BackendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendNameInput"></a>

```csharp
public string BackendNameInput { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendName"></a>

```csharp
public string BackendName { get; }
```

- *Type:* string

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersOutputReference <a name="LoadbalancerFrontendRuleMatchersOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySize">PutBodySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySizeRange">PutBodySizeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putCookie">PutCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpMethod">PutHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putNumMembersUp">PutNumMembersUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putPath">PutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcIp">PutSrcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPort">PutSrcPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPortRange">PutSrcPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrl">PutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlParam">PutUrlParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlQuery">PutUrlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySize">ResetBodySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySizeRange">ResetBodySizeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetCookie">ResetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetNumMembersUp">ResetNumMembersUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcIp">ResetSrcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPort">ResetSrcPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPortRange">ResetSrcPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlParam">ResetUrlParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlQuery">ResetUrlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodySize` <a name="PutBodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySize"></a>

```csharp
private void PutBodySize(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySize.parameter.value"></a>

- *Type:* object

---

##### `PutBodySizeRange` <a name="PutBodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySizeRange"></a>

```csharp
private void PutBodySizeRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySizeRange.parameter.value"></a>

- *Type:* object

---

##### `PutCookie` <a name="PutCookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putCookie"></a>

```csharp
private void PutCookie(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putCookie.parameter.value"></a>

- *Type:* object

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHost"></a>

```csharp
private void PutHost(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHost.parameter.value"></a>

- *Type:* object

---

##### `PutHttpMethod` <a name="PutHttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpMethod"></a>

```csharp
private void PutHttpMethod(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpMethod.parameter.value"></a>

- *Type:* object

---

##### `PutNumMembersUp` <a name="PutNumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putNumMembersUp"></a>

```csharp
private void PutNumMembersUp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putNumMembersUp.parameter.value"></a>

- *Type:* object

---

##### `PutPath` <a name="PutPath" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putPath"></a>

```csharp
private void PutPath(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putPath.parameter.value"></a>

- *Type:* object

---

##### `PutSrcIp` <a name="PutSrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcIp"></a>

```csharp
private void PutSrcIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcIp.parameter.value"></a>

- *Type:* object

---

##### `PutSrcPort` <a name="PutSrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPort"></a>

```csharp
private void PutSrcPort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPort.parameter.value"></a>

- *Type:* object

---

##### `PutSrcPortRange` <a name="PutSrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPortRange"></a>

```csharp
private void PutSrcPortRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPortRange.parameter.value"></a>

- *Type:* object

---

##### `PutUrl` <a name="PutUrl" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrl"></a>

```csharp
private void PutUrl(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrl.parameter.value"></a>

- *Type:* object

---

##### `PutUrlParam` <a name="PutUrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlParam"></a>

```csharp
private void PutUrlParam(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlParam.parameter.value"></a>

- *Type:* object

---

##### `PutUrlQuery` <a name="PutUrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlQuery"></a>

```csharp
private void PutUrlQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetBodySize` <a name="ResetBodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySize"></a>

```csharp
private void ResetBodySize()
```

##### `ResetBodySizeRange` <a name="ResetBodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySizeRange"></a>

```csharp
private void ResetBodySizeRange()
```

##### `ResetCookie` <a name="ResetCookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetCookie"></a>

```csharp
private void ResetCookie()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetNumMembersUp` <a name="ResetNumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetNumMembersUp"></a>

```csharp
private void ResetNumMembersUp()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSrcIp` <a name="ResetSrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcIp"></a>

```csharp
private void ResetSrcIp()
```

##### `ResetSrcPort` <a name="ResetSrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPort"></a>

```csharp
private void ResetSrcPort()
```

##### `ResetSrcPortRange` <a name="ResetSrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPortRange"></a>

```csharp
private void ResetSrcPortRange()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUrlParam` <a name="ResetUrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlParam"></a>

```csharp
private void ResetUrlParam()
```

##### `ResetUrlQuery` <a name="ResetUrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlQuery"></a>

```csharp
private void ResetUrlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySize">BodySize</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList">LoadbalancerFrontendRuleMatchersBodySizeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRange">BodySizeRange</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList">LoadbalancerFrontendRuleMatchersBodySizeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList">LoadbalancerFrontendRuleMatchersCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList">LoadbalancerFrontendRuleMatchersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList">LoadbalancerFrontendRuleMatchersHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethod">HttpMethod</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList">LoadbalancerFrontendRuleMatchersHttpMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUp">NumMembersUp</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList">LoadbalancerFrontendRuleMatchersNumMembersUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList">LoadbalancerFrontendRuleMatchersPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIp">SrcIp</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList">LoadbalancerFrontendRuleMatchersSrcIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPort">SrcPort</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList">LoadbalancerFrontendRuleMatchersSrcPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRange">SrcPortRange</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList">LoadbalancerFrontendRuleMatchersSrcPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.url">Url</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList">LoadbalancerFrontendRuleMatchersUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParam">UrlParam</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList">LoadbalancerFrontendRuleMatchersUrlParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQuery">UrlQuery</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList">LoadbalancerFrontendRuleMatchersUrlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeInput">BodySizeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRangeInput">BodySizeRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookieInput">CookieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.hostInput">HostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUpInput">NumMembersUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.pathInput">PathInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIpInput">SrcIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortInput">SrcPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRangeInput">SrcPortRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlInput">UrlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParamInput">UrlParamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQueryInput">UrlQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodySize`<sup>Required</sup> <a name="BodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySize"></a>

```csharp
public LoadbalancerFrontendRuleMatchersBodySizeList BodySize { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList">LoadbalancerFrontendRuleMatchersBodySizeList</a>

---

##### `BodySizeRange`<sup>Required</sup> <a name="BodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRange"></a>

```csharp
public LoadbalancerFrontendRuleMatchersBodySizeRangeList BodySizeRange { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList">LoadbalancerFrontendRuleMatchersBodySizeRangeList</a>

---

##### `Cookie`<sup>Required</sup> <a name="Cookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookie"></a>

```csharp
public LoadbalancerFrontendRuleMatchersCookieList Cookie { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList">LoadbalancerFrontendRuleMatchersCookieList</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.header"></a>

```csharp
public LoadbalancerFrontendRuleMatchersHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList">LoadbalancerFrontendRuleMatchersHeaderList</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.host"></a>

```csharp
public LoadbalancerFrontendRuleMatchersHostList Host { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList">LoadbalancerFrontendRuleMatchersHostList</a>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethod"></a>

```csharp
public LoadbalancerFrontendRuleMatchersHttpMethodList HttpMethod { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList">LoadbalancerFrontendRuleMatchersHttpMethodList</a>

---

##### `NumMembersUp`<sup>Required</sup> <a name="NumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUp"></a>

```csharp
public LoadbalancerFrontendRuleMatchersNumMembersUpList NumMembersUp { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList">LoadbalancerFrontendRuleMatchersNumMembersUpList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.path"></a>

```csharp
public LoadbalancerFrontendRuleMatchersPathList Path { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList">LoadbalancerFrontendRuleMatchersPathList</a>

---

##### `SrcIp`<sup>Required</sup> <a name="SrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIp"></a>

```csharp
public LoadbalancerFrontendRuleMatchersSrcIpList SrcIp { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList">LoadbalancerFrontendRuleMatchersSrcIpList</a>

---

##### `SrcPort`<sup>Required</sup> <a name="SrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPort"></a>

```csharp
public LoadbalancerFrontendRuleMatchersSrcPortList SrcPort { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList">LoadbalancerFrontendRuleMatchersSrcPortList</a>

---

##### `SrcPortRange`<sup>Required</sup> <a name="SrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRange"></a>

```csharp
public LoadbalancerFrontendRuleMatchersSrcPortRangeList SrcPortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList">LoadbalancerFrontendRuleMatchersSrcPortRangeList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.url"></a>

```csharp
public LoadbalancerFrontendRuleMatchersUrlList Url { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList">LoadbalancerFrontendRuleMatchersUrlList</a>

---

##### `UrlParam`<sup>Required</sup> <a name="UrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParam"></a>

```csharp
public LoadbalancerFrontendRuleMatchersUrlParamList UrlParam { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList">LoadbalancerFrontendRuleMatchersUrlParamList</a>

---

##### `UrlQuery`<sup>Required</sup> <a name="UrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQuery"></a>

```csharp
public LoadbalancerFrontendRuleMatchersUrlQueryList UrlQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList">LoadbalancerFrontendRuleMatchersUrlQueryList</a>

---

##### `BodySizeInput`<sup>Optional</sup> <a name="BodySizeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeInput"></a>

```csharp
public object BodySizeInput { get; }
```

- *Type:* object

---

##### `BodySizeRangeInput`<sup>Optional</sup> <a name="BodySizeRangeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRangeInput"></a>

```csharp
public object BodySizeRangeInput { get; }
```

- *Type:* object

---

##### `CookieInput`<sup>Optional</sup> <a name="CookieInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookieInput"></a>

```csharp
public object CookieInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.hostInput"></a>

```csharp
public object HostInput { get; }
```

- *Type:* object

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethodInput"></a>

```csharp
public object HttpMethodInput { get; }
```

- *Type:* object

---

##### `NumMembersUpInput`<sup>Optional</sup> <a name="NumMembersUpInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUpInput"></a>

```csharp
public object NumMembersUpInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.pathInput"></a>

```csharp
public object PathInput { get; }
```

- *Type:* object

---

##### `SrcIpInput`<sup>Optional</sup> <a name="SrcIpInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIpInput"></a>

```csharp
public object SrcIpInput { get; }
```

- *Type:* object

---

##### `SrcPortInput`<sup>Optional</sup> <a name="SrcPortInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortInput"></a>

```csharp
public object SrcPortInput { get; }
```

- *Type:* object

---

##### `SrcPortRangeInput`<sup>Optional</sup> <a name="SrcPortRangeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRangeInput"></a>

```csharp
public object SrcPortRangeInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlInput"></a>

```csharp
public object UrlInput { get; }
```

- *Type:* object

---

##### `UrlParamInput`<sup>Optional</sup> <a name="UrlParamInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParamInput"></a>

```csharp
public object UrlParamInput { get; }
```

- *Type:* object

---

##### `UrlQueryInput`<sup>Optional</sup> <a name="UrlQueryInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQueryInput"></a>

```csharp
public object UrlQueryInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerFrontendRuleMatchers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>

---


### LoadbalancerFrontendRuleMatchersPathList <a name="LoadbalancerFrontendRuleMatchersPathList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersPathOutputReference <a name="LoadbalancerFrontendRuleMatchersPathOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersSrcIpList <a name="LoadbalancerFrontendRuleMatchersSrcIpList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersSrcIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersSrcIpOutputReference <a name="LoadbalancerFrontendRuleMatchersSrcIpOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersSrcPortList <a name="LoadbalancerFrontendRuleMatchersSrcPortList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersSrcPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersSrcPortOutputReference <a name="LoadbalancerFrontendRuleMatchersSrcPortOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersSrcPortRangeList <a name="LoadbalancerFrontendRuleMatchersSrcPortRangeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcPortRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference <a name="LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEndInput">RangeEndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStartInput">RangeStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEnd">RangeEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStart">RangeStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `RangeEndInput`<sup>Optional</sup> <a name="RangeEndInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEndInput"></a>

```csharp
public double RangeEndInput { get; }
```

- *Type:* double

---

##### `RangeStartInput`<sup>Optional</sup> <a name="RangeStartInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStartInput"></a>

```csharp
public double RangeStartInput { get; }
```

- *Type:* double

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `RangeEnd`<sup>Required</sup> <a name="RangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEnd"></a>

```csharp
public double RangeEnd { get; }
```

- *Type:* double

---

##### `RangeStart`<sup>Required</sup> <a name="RangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStart"></a>

```csharp
public double RangeStart { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersUrlList <a name="LoadbalancerFrontendRuleMatchersUrlList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersUrlOutputReference <a name="LoadbalancerFrontendRuleMatchersUrlOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersUrlParamList <a name="LoadbalancerFrontendRuleMatchersUrlParamList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersUrlParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersUrlParamOutputReference <a name="LoadbalancerFrontendRuleMatchersUrlParamOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersUrlQueryList <a name="LoadbalancerFrontendRuleMatchersUrlQueryList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.get"></a>

```csharp
private LoadbalancerFrontendRuleMatchersUrlQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendRuleMatchersUrlQueryOutputReference <a name="LoadbalancerFrontendRuleMatchersUrlQueryOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendRuleMatchersUrlQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetInverse">ResetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetIgnoreCase"></a>

```csharp
private void ResetIgnoreCase()
```

##### `ResetInverse` <a name="ResetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetInverse"></a>

```csharp
private void ResetInverse()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverseInput">InverseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverse">Inverse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCaseInput"></a>

```csharp
public object IgnoreCaseInput { get; }
```

- *Type:* object

---

##### `InverseInput`<sup>Optional</sup> <a name="InverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverseInput"></a>

```csharp
public object InverseInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCase"></a>

```csharp
public object IgnoreCase { get; }
```

- *Type:* object

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverse"></a>

```csharp
public object Inverse { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



