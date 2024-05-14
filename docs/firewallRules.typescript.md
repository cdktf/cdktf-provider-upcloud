# `firewallRules` Submodule <a name="`firewallRules` Submodule" id="@cdktf/provider-upcloud.firewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallRules <a name="FirewallRules" id="@cdktf/provider-upcloud.firewallRules.FirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules upcloud_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

new firewallRules.FirewallRules(scope: Construct, id: string, config: FirewallRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig">FirewallRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig">FirewallRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule">putFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFirewallRule` <a name="putFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule"></a>

```typescript
public putFirewallRule(value: IResolvable | FirewallRulesFirewallRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.putFirewallRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isConstruct"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

firewallRules.FirewallRules.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

firewallRules.FirewallRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

firewallRules.FirewallRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

firewallRules.FirewallRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirewallRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule">firewallRule</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput">firewallRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallRule`<sup>Required</sup> <a name="firewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRule"></a>

```typescript
public readonly firewallRule: FirewallRulesFirewallRuleList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList">FirewallRulesFirewallRuleList</a>

---

##### `firewallRuleInput`<sup>Optional</sup> <a name="firewallRuleInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.firewallRuleInput"></a>

```typescript
public readonly firewallRuleInput: IResolvable | FirewallRulesFirewallRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.firewallRules.FirewallRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallRulesConfig <a name="FirewallRulesConfig" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.Initializer"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

const firewallRulesConfig: firewallRules.FirewallRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule">firewallRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId">serverId</a></code> | <code>string</code> | The unique id of the server to be protected the firewall rules. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#id FirewallRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallRule`<sup>Required</sup> <a name="firewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.firewallRule"></a>

```typescript
public readonly firewallRule: IResolvable | FirewallRulesFirewallRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The unique id of the server to be protected the firewall rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#server_id FirewallRules#server_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#id FirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FirewallRulesFirewallRule <a name="FirewallRulesFirewallRule" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.Initializer"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

const firewallRulesFirewallRule: firewallRules.FirewallRulesFirewallRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action">action</a></code> | <code>string</code> | Action to take if the rule conditions are met. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction">direction</a></code> | <code>string</code> | The direction of network traffic this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment">comment</a></code> | <code>string</code> | Freeform comment string for the rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd">destinationAddressEnd</a></code> | <code>string</code> | The destination address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart">destinationAddressStart</a></code> | <code>string</code> | The destination address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd">destinationPortEnd</a></code> | <code>string</code> | The destination port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart">destinationPortStart</a></code> | <code>string</code> | The destination port range starts from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family">family</a></code> | <code>string</code> | The address family of new firewall rule. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType">icmpType</a></code> | <code>string</code> | The ICMP type. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol">protocol</a></code> | <code>string</code> | The protocol this rule will be applied to. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd">sourceAddressEnd</a></code> | <code>string</code> | The source address range ends from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart">sourceAddressStart</a></code> | <code>string</code> | The source address range starts from this address. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd">sourcePortEnd</a></code> | <code>string</code> | The source port range ends from this port number. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart">sourcePortStart</a></code> | <code>string</code> | The source port range starts from this port number. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to take if the rule conditions are met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#action FirewallRules#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction of network traffic this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#direction FirewallRules#direction}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Freeform comment string for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#comment FirewallRules#comment}

---

##### `destinationAddressEnd`<sup>Optional</sup> <a name="destinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressEnd"></a>

```typescript
public readonly destinationAddressEnd: string;
```

- *Type:* string

The destination address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#destination_address_end FirewallRules#destination_address_end}

---

##### `destinationAddressStart`<sup>Optional</sup> <a name="destinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationAddressStart"></a>

```typescript
public readonly destinationAddressStart: string;
```

- *Type:* string

The destination address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#destination_address_start FirewallRules#destination_address_start}

---

##### `destinationPortEnd`<sup>Optional</sup> <a name="destinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortEnd"></a>

```typescript
public readonly destinationPortEnd: string;
```

- *Type:* string

The destination port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#destination_port_end FirewallRules#destination_port_end}

---

##### `destinationPortStart`<sup>Optional</sup> <a name="destinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.destinationPortStart"></a>

```typescript
public readonly destinationPortStart: string;
```

- *Type:* string

The destination port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#destination_port_start FirewallRules#destination_port_start}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

The address family of new firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#family FirewallRules#family}

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

The ICMP type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#icmp_type FirewallRules#icmp_type}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol this rule will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#protocol FirewallRules#protocol}

---

##### `sourceAddressEnd`<sup>Optional</sup> <a name="sourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressEnd"></a>

```typescript
public readonly sourceAddressEnd: string;
```

- *Type:* string

The source address range ends from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#source_address_end FirewallRules#source_address_end}

---

##### `sourceAddressStart`<sup>Optional</sup> <a name="sourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourceAddressStart"></a>

```typescript
public readonly sourceAddressStart: string;
```

- *Type:* string

The source address range starts from this address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#source_address_start FirewallRules#source_address_start}

---

##### `sourcePortEnd`<sup>Optional</sup> <a name="sourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortEnd"></a>

```typescript
public readonly sourcePortEnd: string;
```

- *Type:* string

The source port range ends from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#source_port_end FirewallRules#source_port_end}

---

##### `sourcePortStart`<sup>Optional</sup> <a name="sourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule.property.sourcePortStart"></a>

```typescript
public readonly sourcePortStart: string;
```

- *Type:* string

The source port range starts from this port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/firewall_rules#source_port_start FirewallRules#source_port_start}

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallRulesFirewallRuleList <a name="FirewallRulesFirewallRuleList" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

new firewallRules.FirewallRulesFirewallRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get"></a>

```typescript
public get(index: number): FirewallRulesFirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirewallRulesFirewallRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a>[]

---


### FirewallRulesFirewallRuleOutputReference <a name="FirewallRulesFirewallRuleOutputReference" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer"></a>

```typescript
import { firewallRules } from '@cdktf/provider-upcloud'

new firewallRules.FirewallRulesFirewallRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd">resetDestinationAddressEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart">resetDestinationAddressStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd">resetDestinationPortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart">resetDestinationPortStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd">resetSourceAddressEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart">resetSourceAddressStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd">resetSourcePortEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart">resetSourcePortStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDestinationAddressEnd` <a name="resetDestinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressEnd"></a>

```typescript
public resetDestinationAddressEnd(): void
```

##### `resetDestinationAddressStart` <a name="resetDestinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationAddressStart"></a>

```typescript
public resetDestinationAddressStart(): void
```

##### `resetDestinationPortEnd` <a name="resetDestinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortEnd"></a>

```typescript
public resetDestinationPortEnd(): void
```

##### `resetDestinationPortStart` <a name="resetDestinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetDestinationPortStart"></a>

```typescript
public resetDestinationPortStart(): void
```

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetFamily"></a>

```typescript
public resetFamily(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSourceAddressEnd` <a name="resetSourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressEnd"></a>

```typescript
public resetSourceAddressEnd(): void
```

##### `resetSourceAddressStart` <a name="resetSourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourceAddressStart"></a>

```typescript
public resetSourceAddressStart(): void
```

##### `resetSourcePortEnd` <a name="resetSourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortEnd"></a>

```typescript
public resetSourcePortEnd(): void
```

##### `resetSourcePortStart` <a name="resetSourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.resetSourcePortStart"></a>

```typescript
public resetSourcePortStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput">destinationAddressEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput">destinationAddressStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput">destinationPortEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput">destinationPortStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput">sourceAddressEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput">sourceAddressStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput">sourcePortEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput">sourcePortStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd">destinationAddressEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart">destinationAddressStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd">destinationPortEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart">destinationPortStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType">icmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd">sourceAddressEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart">sourceAddressStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd">sourcePortEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart">sourcePortStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `destinationAddressEndInput`<sup>Optional</sup> <a name="destinationAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEndInput"></a>

```typescript
public readonly destinationAddressEndInput: string;
```

- *Type:* string

---

##### `destinationAddressStartInput`<sup>Optional</sup> <a name="destinationAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStartInput"></a>

```typescript
public readonly destinationAddressStartInput: string;
```

- *Type:* string

---

##### `destinationPortEndInput`<sup>Optional</sup> <a name="destinationPortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEndInput"></a>

```typescript
public readonly destinationPortEndInput: string;
```

- *Type:* string

---

##### `destinationPortStartInput`<sup>Optional</sup> <a name="destinationPortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStartInput"></a>

```typescript
public readonly destinationPortStartInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceAddressEndInput`<sup>Optional</sup> <a name="sourceAddressEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEndInput"></a>

```typescript
public readonly sourceAddressEndInput: string;
```

- *Type:* string

---

##### `sourceAddressStartInput`<sup>Optional</sup> <a name="sourceAddressStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStartInput"></a>

```typescript
public readonly sourceAddressStartInput: string;
```

- *Type:* string

---

##### `sourcePortEndInput`<sup>Optional</sup> <a name="sourcePortEndInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEndInput"></a>

```typescript
public readonly sourcePortEndInput: string;
```

- *Type:* string

---

##### `sourcePortStartInput`<sup>Optional</sup> <a name="sourcePortStartInput" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStartInput"></a>

```typescript
public readonly sourcePortStartInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `destinationAddressEnd`<sup>Required</sup> <a name="destinationAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressEnd"></a>

```typescript
public readonly destinationAddressEnd: string;
```

- *Type:* string

---

##### `destinationAddressStart`<sup>Required</sup> <a name="destinationAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationAddressStart"></a>

```typescript
public readonly destinationAddressStart: string;
```

- *Type:* string

---

##### `destinationPortEnd`<sup>Required</sup> <a name="destinationPortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortEnd"></a>

```typescript
public readonly destinationPortEnd: string;
```

- *Type:* string

---

##### `destinationPortStart`<sup>Required</sup> <a name="destinationPortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.destinationPortStart"></a>

```typescript
public readonly destinationPortStart: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceAddressEnd`<sup>Required</sup> <a name="sourceAddressEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressEnd"></a>

```typescript
public readonly sourceAddressEnd: string;
```

- *Type:* string

---

##### `sourceAddressStart`<sup>Required</sup> <a name="sourceAddressStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourceAddressStart"></a>

```typescript
public readonly sourceAddressStart: string;
```

- *Type:* string

---

##### `sourcePortEnd`<sup>Required</sup> <a name="sourcePortEnd" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortEnd"></a>

```typescript
public readonly sourcePortEnd: string;
```

- *Type:* string

---

##### `sourcePortStart`<sup>Required</sup> <a name="sourcePortStart" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.sourcePortStart"></a>

```typescript
public readonly sourcePortStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirewallRulesFirewallRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-upcloud.firewallRules.FirewallRulesFirewallRule">FirewallRulesFirewallRule</a> | cdktf.IResolvable

---



