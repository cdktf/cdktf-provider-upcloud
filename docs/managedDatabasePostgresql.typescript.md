# `managedDatabasePostgresql` Submodule <a name="`managedDatabasePostgresql` Submodule" id="@cdktf/provider-upcloud.managedDatabasePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabasePostgresql <a name="ManagedDatabasePostgresql" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresql(scope: Construct, id: string, config: ManagedDatabasePostgresqlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig">ManagedDatabasePostgresqlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig">ManagedDatabasePostgresqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties"></a>

```typescript
public putProperties(value: ManagedDatabasePostgresqlProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow"></a>

```typescript
public resetMaintenanceWindowDow(): void
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime"></a>

```typescript
public resetMaintenanceWindowTime(): void
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered"></a>

```typescript
public resetPowered(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTitle"></a>

```typescript
public resetTitle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabasePostgresql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabasePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabasePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase">primaryDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost">serviceHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword">servicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort">servicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername">serviceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode">sslmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput">poweredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered">powered</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components"></a>

```typescript
public readonly components: ManagedDatabasePostgresqlComponentsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates"></a>

```typescript
public readonly nodeStates: ManagedDatabasePostgresqlNodeStatesList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase"></a>

```typescript
public readonly primaryDatabase: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties"></a>

```typescript
public readonly properties: ManagedDatabasePostgresqlPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost"></a>

```typescript
public readonly serviceHost: string;
```

- *Type:* string

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword"></a>

```typescript
public readonly servicePassword: string;
```

- *Type:* string

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort"></a>

```typescript
public readonly servicePort: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername"></a>

```typescript
public readonly serviceUsername: string;
```

- *Type:* string

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode"></a>

```typescript
public readonly sslmode: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput"></a>

```typescript
public readonly maintenanceWindowDowInput: string;
```

- *Type:* string

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput"></a>

```typescript
public readonly maintenanceWindowTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput"></a>

```typescript
public readonly poweredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: ManagedDatabasePostgresqlProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow"></a>

```typescript
public readonly maintenanceWindowDow: string;
```

- *Type:* string

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime"></a>

```typescript
public readonly maintenanceWindowTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered"></a>

```typescript
public readonly powered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabasePostgresqlComponents <a name="ManagedDatabasePostgresqlComponents" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlComponents: managedDatabasePostgresql.ManagedDatabasePostgresqlComponents = { ... }
```


### ManagedDatabasePostgresqlConfig <a name="ManagedDatabasePostgresqlConfig" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlConfig: managedDatabasePostgresql.ManagedDatabasePostgresqlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name">name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan">plan</a></code> | <code>string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered">powered</a></code> | <code>boolean \| cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title">title</a></code> | <code>string</code> | Title of a managed database instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow"></a>

```typescript
public readonly maintenanceWindowDow: string;
```

- *Type:* string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime"></a>

```typescript
public readonly maintenanceWindowTime: string;
```

- *Type:* string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered"></a>

```typescript
public readonly powered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties"></a>

```typescript
public readonly properties: ManagedDatabasePostgresqlProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

### ManagedDatabasePostgresqlNodeStates <a name="ManagedDatabasePostgresqlNodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlNodeStates: managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates = { ... }
```


### ManagedDatabasePostgresqlProperties <a name="ManagedDatabasePostgresqlProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlProperties: managedDatabasePostgresql.ManagedDatabasePostgresqlProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword">adminPassword</a></code> | <code>string</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername">adminUsername</a></code> | <code>string</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatic utility network IP Filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>number</code> | Specifies a fraction of the table size to add to `autovacuum_analyze_threshold` when deciding whether to trigger an `ANALYZE`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>number</code> | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>number</code> | Specifies the maximum age (in transactions) that a table's `pg_class.relfrozenxid` field can attain before a `VACUUM` operation is forced to prevent transaction ID wraparound within the table.  				Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled.  				This parameter will cause the server to be restarted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>number</code> | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>number</code> | Specifies the minimum delay between autovacuum runs on any given database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>number</code> | Specifies the cost delay value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>number</code> | Specifies the cost limit value that will be used in automatic `VACUUM` operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>number</code> | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a `VACUUM`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>number</code> | Specifies the minimum number of updated or deleted tuples needed to trigger a `VACUUM` in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour">backupHour</a></code> | <code>number</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute">backupMinute</a></code> | <code>number</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay">bgwriterDelay</a></code> | <code>number</code> | Specifies the delay between activity rounds for the background writer in milliseconds. Default is `200`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>number</code> | Whenever more than `bgwriter_flush_after` bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>number</code> | In each round, no more than this many buffers will be written by the background writer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>number</code> | The average recent need for new buffers is multiplied by `bgwriter_lru_multiplier` to arrive at an estimate of the number that will be needed during the next round (up to `bgwriter_lru_maxpages`). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout">deadlockTimeout</a></code> | <code>number</code> | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression">defaultToastCompression</a></code> | <code>string</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>number</code> | Time out sessions with open transactions after this number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter">ipFilter</a></code> | <code>string[]</code> | IP filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit">jit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls system-wide use of Just-in-Time Compilation (JIT). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>number</code> | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>string</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix">logLinePrefix</a></code> | <code>string</code> | Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>number</code> | Log statements that take more than this number of milliseconds to run, `-1` disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles">logTempFiles</a></code> | <code>number</code> | Log statements for each temporary file created larger than this number of kilobytes, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>number</code> | PostgreSQL maximum number of files that can be open per process. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>number</code> | PostgreSQL maximum locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>number</code> | PostgreSQL maximum logical replication workers (taken from the pool of `max_parallel_workers`). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>number</code> | Sets the maximum number of workers that the system can support for parallel queries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>number</code> | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>number</code> | PostgreSQL maximum predicate locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>number</code> | PostgreSQL maximum prepared transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>number</code> | PostgreSQL maximum replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize">maxSlotWalKeepSize</a></code> | <code>number</code> | PostgreSQL maximum WAL size (MB) reserved for replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth">maxStackDepth</a></code> | <code>number</code> | Maximum depth of the stack in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>number</code> | Max standby archive delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>number</code> | Max standby streaming delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders">maxWalSenders</a></code> | <code>number</code> | PostgreSQL maximum WAL senders. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>number</code> | Sets the maximum number of background processes that the system can support. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout">pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | pglookout block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>number</code> | Sets the time interval to run pg_partman's scheduled tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>string</code> | Controls which role to use for pg_partman's scheduled background tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgReadReplica">pgReadReplica</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the service which is being forked be a read replica (deprecated, use read_replica service integration instead). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgServiceToForkFrom">pgServiceToForkFrom</a></code> | <code>string</code> | Name of the PG Service from which to fork (deprecated, use service_to_fork_from). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable">pgStatMonitorEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the pg_stat_monitor extension. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan">pgStatMonitorPgsmEnableQueryPlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables or disables query plan monitoring. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets">pgStatMonitorPgsmMaxBuckets</a></code> | <code>number</code> | Sets the maximum number of buckets. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>string</code> | Controls which statements are counted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess">publicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Public access allows connections to your Managed Database services via the public internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>number</code> | Percentage of total RAM that the database server uses for shared memory buffers. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication">synchronousReplication</a></code> | <code>string</code> | Synchronous replication type. Note that the service plan also needs to support synchronous replication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit">tempFileLimit</a></code> | <code>number</code> | PostgreSQL temporary file limit in KiB, -1 for unlimited. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone">timezone</a></code> | <code>string</code> | timezone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>number</code> | Specifies the number of bytes reserved to track the currently executing command for each active session. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>string</code> | Record commit time of transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions">trackFunctions</a></code> | <code>string</code> | Enables tracking of function call counts and time used. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming">trackIoTiming</a></code> | <code>string</code> | Enables timing of database I/O calls. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant">variant</a></code> | <code>string</code> | Variant of the PostgreSQL service, may affect the features that are exposed by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version">version</a></code> | <code>string</code> | PostgreSQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout">walSenderTimeout</a></code> | <code>number</code> | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay">walWriterDelay</a></code> | <code>number</code> | WAL flush interval in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem">workMem</a></code> | <code>number</code> | Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files,  			in MB. |

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```typescript
public readonly automaticUtilityNetworkIpFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}

---

##### `autovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor"></a>

```typescript
public readonly autovacuumAnalyzeScaleFactor: number;
```

- *Type:* number

Specifies a fraction of the table size to add to `autovacuum_analyze_threshold` when deciding whether to trigger an `ANALYZE`.

The default is `0.2` (20% of table size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}

---

##### `autovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold"></a>

```typescript
public readonly autovacuumAnalyzeThreshold: number;
```

- *Type:* number

Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table.

The default is `50` tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}

---

##### `autovacuumFreezeMaxAge`<sup>Optional</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge"></a>

```typescript
public readonly autovacuumFreezeMaxAge: number;
```

- *Type:* number

Specifies the maximum age (in transactions) that a table's `pg_class.relfrozenxid` field can attain before a `VACUUM` operation is forced to prevent transaction ID wraparound within the table.  				Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled.  				This parameter will cause the server to be restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}

---

##### `autovacuumMaxWorkers`<sup>Optional</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers"></a>

```typescript
public readonly autovacuumMaxWorkers: number;
```

- *Type:* number

Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.

The default is `3`. This parameter can only be set at server start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}

---

##### `autovacuumNaptime`<sup>Optional</sup> <a name="autovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime"></a>

```typescript
public readonly autovacuumNaptime: number;
```

- *Type:* number

Specifies the minimum delay between autovacuum runs on any given database.

The delay is measured in seconds, and the default is `1` minute

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}

---

##### `autovacuumVacuumCostDelay`<sup>Optional</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay"></a>

```typescript
public readonly autovacuumVacuumCostDelay: number;
```

- *Type:* number

Specifies the cost delay value that will be used in automatic VACUUM operations.

If `-1` is specified, the regular `vacuum_cost_delay` value will be used. The default value is `20` milliseconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}

---

##### `autovacuumVacuumCostLimit`<sup>Optional</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit"></a>

```typescript
public readonly autovacuumVacuumCostLimit: number;
```

- *Type:* number

Specifies the cost limit value that will be used in automatic `VACUUM` operations.

If `-1` is specified (which is the default), the regular `vacuum_cost_limit` value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}

---

##### `autovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor"></a>

```typescript
public readonly autovacuumVacuumScaleFactor: number;
```

- *Type:* number

Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a `VACUUM`.

The default is `0.2` (20% of table size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}

---

##### `autovacuumVacuumThreshold`<sup>Optional</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold"></a>

```typescript
public readonly autovacuumVacuumThreshold: number;
```

- *Type:* number

Specifies the minimum number of updated or deleted tuples needed to trigger a `VACUUM` in any one table.

The default is `50` tuples

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}

---

##### `backupHour`<sup>Optional</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour"></a>

```typescript
public readonly backupHour: number;
```

- *Type:* number

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}

---

##### `backupMinute`<sup>Optional</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute"></a>

```typescript
public readonly backupMinute: number;
```

- *Type:* number

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}

---

##### `bgwriterDelay`<sup>Optional</sup> <a name="bgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay"></a>

```typescript
public readonly bgwriterDelay: number;
```

- *Type:* number

Specifies the delay between activity rounds for the background writer in milliseconds. Default is `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}

---

##### `bgwriterFlushAfter`<sup>Optional</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter"></a>

```typescript
public readonly bgwriterFlushAfter: number;
```

- *Type:* number

Whenever more than `bgwriter_flush_after` bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage.

Specified in kilobytes, default is `512`. Setting of `0` disables forced writeback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}

---

##### `bgwriterLruMaxpages`<sup>Optional</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages"></a>

```typescript
public readonly bgwriterLruMaxpages: number;
```

- *Type:* number

In each round, no more than this many buffers will be written by the background writer.

Setting this to zero disables background writing. Default is `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}

---

##### `bgwriterLruMultiplier`<sup>Optional</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier"></a>

```typescript
public readonly bgwriterLruMultiplier: number;
```

- *Type:* number

The average recent need for new buffers is multiplied by `bgwriter_lru_multiplier` to arrive at an estimate of the number that will be needed during the next round (up to `bgwriter_lru_maxpages`).

`1.0` represents a "just in time" policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}

---

##### `deadlockTimeout`<sup>Optional</sup> <a name="deadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout"></a>

```typescript
public readonly deadlockTimeout: number;
```

- *Type:* number

This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}

---

##### `defaultToastCompression`<sup>Optional</sup> <a name="defaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression"></a>

```typescript
public readonly defaultToastCompression: string;
```

- *Type:* string

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* number

Time out sessions with open transactions after this number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter"></a>

```typescript
public readonly ipFilter: string[];
```

- *Type:* string[]

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}

---

##### `jit`<sup>Optional</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit"></a>

```typescript
public readonly jit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls system-wide use of Just-in-Time Compilation (JIT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}

---

##### `logAutovacuumMinDuration`<sup>Optional</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration"></a>

```typescript
public readonly logAutovacuumMinDuration: number;
```

- *Type:* number

Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds.

Setting this to `0` logs all autovacuum actions. The default `-1` disables logging autovacuum actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}

---

##### `logErrorVerbosity`<sup>Optional</sup> <a name="logErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity"></a>

```typescript
public readonly logErrorVerbosity: string;
```

- *Type:* string

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}

---

##### `logLinePrefix`<sup>Optional</sup> <a name="logLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix"></a>

```typescript
public readonly logLinePrefix: string;
```

- *Type:* string

Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}

---

##### `logMinDurationStatement`<sup>Optional</sup> <a name="logMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement"></a>

```typescript
public readonly logMinDurationStatement: number;
```

- *Type:* number

Log statements that take more than this number of milliseconds to run, `-1` disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}

---

##### `logTempFiles`<sup>Optional</sup> <a name="logTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles"></a>

```typescript
public readonly logTempFiles: number;
```

- *Type:* number

Log statements for each temporary file created larger than this number of kilobytes, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}

---

##### `maxFilesPerProcess`<sup>Optional</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess"></a>

```typescript
public readonly maxFilesPerProcess: number;
```

- *Type:* number

PostgreSQL maximum number of files that can be open per process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}

---

##### `maxLocksPerTransaction`<sup>Optional</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction"></a>

```typescript
public readonly maxLocksPerTransaction: number;
```

- *Type:* number

PostgreSQL maximum locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}

---

##### `maxLogicalReplicationWorkers`<sup>Optional</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers"></a>

```typescript
public readonly maxLogicalReplicationWorkers: number;
```

- *Type:* number

PostgreSQL maximum logical replication workers (taken from the pool of `max_parallel_workers`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}

---

##### `maxParallelWorkers`<sup>Optional</sup> <a name="maxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers"></a>

```typescript
public readonly maxParallelWorkers: number;
```

- *Type:* number

Sets the maximum number of workers that the system can support for parallel queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}

---

##### `maxParallelWorkersPerGather`<sup>Optional</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather"></a>

```typescript
public readonly maxParallelWorkersPerGather: number;
```

- *Type:* number

Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}

---

##### `maxPredLocksPerTransaction`<sup>Optional</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction"></a>

```typescript
public readonly maxPredLocksPerTransaction: number;
```

- *Type:* number

PostgreSQL maximum predicate locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}

---

##### `maxPreparedTransactions`<sup>Optional</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions"></a>

```typescript
public readonly maxPreparedTransactions: number;
```

- *Type:* number

PostgreSQL maximum prepared transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}

---

##### `maxReplicationSlots`<sup>Optional</sup> <a name="maxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots"></a>

```typescript
public readonly maxReplicationSlots: number;
```

- *Type:* number

PostgreSQL maximum replication slots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}

---

##### `maxSlotWalKeepSize`<sup>Optional</sup> <a name="maxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize"></a>

```typescript
public readonly maxSlotWalKeepSize: number;
```

- *Type:* number

PostgreSQL maximum WAL size (MB) reserved for replication slots.

Default is `-1` (unlimited). `wal_keep_size` minimum WAL size setting takes precedence over this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}

---

##### `maxStackDepth`<sup>Optional</sup> <a name="maxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth"></a>

```typescript
public readonly maxStackDepth: number;
```

- *Type:* number

Maximum depth of the stack in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}

---

##### `maxStandbyArchiveDelay`<sup>Optional</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay"></a>

```typescript
public readonly maxStandbyArchiveDelay: number;
```

- *Type:* number

Max standby archive delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}

---

##### `maxStandbyStreamingDelay`<sup>Optional</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay"></a>

```typescript
public readonly maxStandbyStreamingDelay: number;
```

- *Type:* number

Max standby streaming delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}

---

##### `maxWalSenders`<sup>Optional</sup> <a name="maxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders"></a>

```typescript
public readonly maxWalSenders: number;
```

- *Type:* number

PostgreSQL maximum WAL senders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}

---

##### `maxWorkerProcesses`<sup>Optional</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses"></a>

```typescript
public readonly maxWorkerProcesses: number;
```

- *Type:* number

Sets the maximum number of background processes that the system can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration"></a>

```typescript
public readonly migration: ManagedDatabasePostgresqlPropertiesMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}

---

##### `pgbouncer`<sup>Optional</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer"></a>

```typescript
public readonly pgbouncer: ManagedDatabasePostgresqlPropertiesPgbouncer;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}

---

##### `pglookout`<sup>Optional</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout"></a>

```typescript
public readonly pglookout: ManagedDatabasePostgresqlPropertiesPglookout;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

pglookout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}

---

##### `pgPartmanBgwInterval`<sup>Optional</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval"></a>

```typescript
public readonly pgPartmanBgwInterval: number;
```

- *Type:* number

Sets the time interval to run pg_partman's scheduled tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}

---

##### `pgPartmanBgwRole`<sup>Optional</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole"></a>

```typescript
public readonly pgPartmanBgwRole: string;
```

- *Type:* string

Controls which role to use for pg_partman's scheduled background tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}

---

##### `pgReadReplica`<sup>Optional</sup> <a name="pgReadReplica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgReadReplica"></a>

```typescript
public readonly pgReadReplica: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the service which is being forked be a read replica (deprecated, use read_replica service integration instead).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_read_replica ManagedDatabasePostgresql#pg_read_replica}

---

##### `pgServiceToForkFrom`<sup>Optional</sup> <a name="pgServiceToForkFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgServiceToForkFrom"></a>

```typescript
public readonly pgServiceToForkFrom: string;
```

- *Type:* string

Name of the PG Service from which to fork (deprecated, use service_to_fork_from).

This has effect only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_service_to_fork_from ManagedDatabasePostgresql#pg_service_to_fork_from}

---

##### `pgStatMonitorEnable`<sup>Optional</sup> <a name="pgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable"></a>

```typescript
public readonly pgStatMonitorEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the pg_stat_monitor extension.

Enabling this extension will cause the cluster to be restarted.When this extension is enabled, pg_stat_statements results for utility commands are unreliable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}

---

##### `pgStatMonitorPgsmEnableQueryPlan`<sup>Optional</sup> <a name="pgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```typescript
public readonly pgStatMonitorPgsmEnableQueryPlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables or disables query plan monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}

---

##### `pgStatMonitorPgsmMaxBuckets`<sup>Optional</sup> <a name="pgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets"></a>

```typescript
public readonly pgStatMonitorPgsmMaxBuckets: number;
```

- *Type:* number

Sets the maximum number of buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}

---

##### `pgStatStatementsTrack`<sup>Optional</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack"></a>

```typescript
public readonly pgStatStatementsTrack: string;
```

- *Type:* string

Controls which statements are counted.

Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), 
			or none to disable statement statistics collection.The default value is `top`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess"></a>

```typescript
public readonly publicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}

---

##### `sharedBuffersPercentage`<sup>Optional</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage"></a>

```typescript
public readonly sharedBuffersPercentage: number;
```

- *Type:* number

Percentage of total RAM that the database server uses for shared memory buffers.

Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the `shared_buffers` configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}

---

##### `synchronousReplication`<sup>Optional</sup> <a name="synchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication"></a>

```typescript
public readonly synchronousReplication: string;
```

- *Type:* string

Synchronous replication type. Note that the service plan also needs to support synchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}

---

##### `tempFileLimit`<sup>Optional</sup> <a name="tempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit"></a>

```typescript
public readonly tempFileLimit: number;
```

- *Type:* number

PostgreSQL temporary file limit in KiB, -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}

---

##### `timescaledb`<sup>Optional</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb"></a>

```typescript
public readonly timescaledb: ManagedDatabasePostgresqlPropertiesTimescaledb;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}

---

##### `trackActivityQuerySize`<sup>Optional</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize"></a>

```typescript
public readonly trackActivityQuerySize: number;
```

- *Type:* number

Specifies the number of bytes reserved to track the currently executing command for each active session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}

---

##### `trackCommitTimestamp`<sup>Optional</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp"></a>

```typescript
public readonly trackCommitTimestamp: string;
```

- *Type:* string

Record commit time of transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}

---

##### `trackFunctions`<sup>Optional</sup> <a name="trackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions"></a>

```typescript
public readonly trackFunctions: string;
```

- *Type:* string

Enables tracking of function call counts and time used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}

---

##### `trackIoTiming`<sup>Optional</sup> <a name="trackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming"></a>

```typescript
public readonly trackIoTiming: string;
```

- *Type:* string

Enables timing of database I/O calls.

This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}

---

##### `variant`<sup>Optional</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant"></a>

```typescript
public readonly variant: string;
```

- *Type:* string

Variant of the PostgreSQL service, may affect the features that are exposed by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

PostgreSQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}

---

##### `walSenderTimeout`<sup>Optional</sup> <a name="walSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout"></a>

```typescript
public readonly walSenderTimeout: number;
```

- *Type:* number

Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.

Setting this value to `0` disables the timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}

---

##### `walWriterDelay`<sup>Optional</sup> <a name="walWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay"></a>

```typescript
public readonly walWriterDelay: number;
```

- *Type:* number

WAL flush interval in milliseconds.

Note that setting this value to lower than the default `200`ms may negatively impact performance

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}

---

##### `workMem`<sup>Optional</sup> <a name="workMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem"></a>

```typescript
public readonly workMem: number;
```

- *Type:* number

Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files,  			in MB.

Default is 1MB + 0.075% of total RAM (up to 32MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}

---

### ManagedDatabasePostgresqlPropertiesMigration <a name="ManagedDatabasePostgresqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlPropertiesMigration: managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname">dbname</a></code> | <code>string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host">host</a></code> | <code>string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs">ignoreDbs</a></code> | <code>string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password">password</a></code> | <code>string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port">port</a></code> | <code>number</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username">username</a></code> | <code>string</code> | User name for authentication with the server where to migrate data from. |

---

##### `dbname`<sup>Optional</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname"></a>

```typescript
public readonly dbname: string;
```

- *Type:* string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}

---

##### `ignoreDbs`<sup>Optional</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs"></a>

```typescript
public readonly ignoreDbs: string;
```

- *Type:* string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}

---

### ManagedDatabasePostgresqlPropertiesPgbouncer <a name="ManagedDatabasePostgresqlPropertiesPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlPropertiesPgbouncer: managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>number</code> | If the automatically created database pools have been unused this many seconds, they are freed. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>number</code> | Do not allow more than this many server connections per database (regardless of user). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode">autodbPoolMode</a></code> | <code>string</code> | PGBouncer pool mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize">autodbPoolSize</a></code> | <code>number</code> | If non-zero then create automatically a pool of that size per user when a pool doesn't exist. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>string[]</code> | List of parameters to ignore when given in startup packet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize">minPoolSize</a></code> | <code>number</code> | Add more server connections to pool if below this number. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>number</code> | If a server connection has been idle more than this many seconds it will be dropped. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime">serverLifetime</a></code> | <code>number</code> | The pooler will close an unused server connection that has been connected longer than this. [seconds]. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>boolean \| cdktf.IResolvable</code> | Run server_reset_query (`DISCARD ALL`) in all pooling modes. |

---

##### `autodbIdleTimeout`<sup>Optional</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout"></a>

```typescript
public readonly autodbIdleTimeout: number;
```

- *Type:* number

If the automatically created database pools have been unused this many seconds, they are freed.

If 0 then timeout is disabled. [seconds]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}

---

##### `autodbMaxDbConnections`<sup>Optional</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections"></a>

```typescript
public readonly autodbMaxDbConnections: number;
```

- *Type:* number

Do not allow more than this many server connections per database (regardless of user).

Setting it to 0 means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}

---

##### `autodbPoolMode`<sup>Optional</sup> <a name="autodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode"></a>

```typescript
public readonly autodbPoolMode: string;
```

- *Type:* string

PGBouncer pool mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}

---

##### `autodbPoolSize`<sup>Optional</sup> <a name="autodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize"></a>

```typescript
public readonly autodbPoolSize: number;
```

- *Type:* number

If non-zero then create automatically a pool of that size per user when a pool doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}

---

##### `ignoreStartupParameters`<sup>Optional</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters"></a>

```typescript
public readonly ignoreStartupParameters: string[];
```

- *Type:* string[]

List of parameters to ignore when given in startup packet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}

---

##### `minPoolSize`<sup>Optional</sup> <a name="minPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize"></a>

```typescript
public readonly minPoolSize: number;
```

- *Type:* number

Add more server connections to pool if below this number.

Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}

---

##### `serverIdleTimeout`<sup>Optional</sup> <a name="serverIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout"></a>

```typescript
public readonly serverIdleTimeout: number;
```

- *Type:* number

If a server connection has been idle more than this many seconds it will be dropped.

If 0 then timeout is disabled. [seconds]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}

---

##### `serverLifetime`<sup>Optional</sup> <a name="serverLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime"></a>

```typescript
public readonly serverLifetime: number;
```

- *Type:* number

The pooler will close an unused server connection that has been connected longer than this. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}

---

##### `serverResetQueryAlways`<sup>Optional</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways"></a>

```typescript
public readonly serverResetQueryAlways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Run server_reset_query (`DISCARD ALL`) in all pooling modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}

---

### ManagedDatabasePostgresqlPropertiesPglookout <a name="ManagedDatabasePostgresqlPropertiesPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlPropertiesPglookout: managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag">maxFailoverReplicationTimeLag</a></code> | <code>number</code> | Number of seconds of master unavailability before triggering database failover to standby. |

---

##### `maxFailoverReplicationTimeLag`<sup>Optional</sup> <a name="maxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag"></a>

```typescript
public readonly maxFailoverReplicationTimeLag: number;
```

- *Type:* number

Number of seconds of master unavailability before triggering database failover to standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}

---

### ManagedDatabasePostgresqlPropertiesTimescaledb <a name="ManagedDatabasePostgresqlPropertiesTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

const managedDatabasePostgresqlPropertiesTimescaledb: managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>number</code> | The number of background workers for timescaledb operations. |

---

##### `maxBackgroundWorkers`<sup>Optional</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers"></a>

```typescript
public readonly maxBackgroundWorkers: number;
```

- *Type:* number

The number of background workers for timescaledb operations.

You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.1/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabasePostgresqlComponentsList <a name="ManagedDatabasePostgresqlComponentsList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get"></a>

```typescript
public get(index: number): ManagedDatabasePostgresqlComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ManagedDatabasePostgresqlComponentsOutputReference <a name="ManagedDatabasePostgresqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route">route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage">usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlComponents;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a>

---


### ManagedDatabasePostgresqlNodeStatesList <a name="ManagedDatabasePostgresqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get"></a>

```typescript
public get(index: number): ManagedDatabasePostgresqlNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ManagedDatabasePostgresqlNodeStatesOutputReference <a name="ManagedDatabasePostgresqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlNodeStates;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a>

---


### ManagedDatabasePostgresqlPropertiesMigrationOutputReference <a name="ManagedDatabasePostgresqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname">resetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs">resetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbname` <a name="resetDbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname"></a>

```typescript
public resetDbname(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetIgnoreDbs` <a name="resetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```typescript
public resetIgnoreDbs(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput">dbnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput">ignoreDbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput">sslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname">dbname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs">ignoreDbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbnameInput`<sup>Optional</sup> <a name="dbnameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```typescript
public readonly dbnameInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `ignoreDbsInput`<sup>Optional</sup> <a name="ignoreDbsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```typescript
public readonly ignoreDbsInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput"></a>

```typescript
public readonly sslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `dbname`<sup>Required</sup> <a name="dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname"></a>

```typescript
public readonly dbname: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ignoreDbs`<sup>Required</sup> <a name="ignoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```typescript
public readonly ignoreDbs: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlPropertiesMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---


### ManagedDatabasePostgresqlPropertiesOutputReference <a name="ManagedDatabasePostgresqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer">putPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout">putPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb">putTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor">resetAutovacuumAnalyzeScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold">resetAutovacuumAnalyzeThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge">resetAutovacuumFreezeMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers">resetAutovacuumMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime">resetAutovacuumNaptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay">resetAutovacuumVacuumCostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit">resetAutovacuumVacuumCostLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor">resetAutovacuumVacuumScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold">resetAutovacuumVacuumThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour">resetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute">resetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay">resetBgwriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter">resetBgwriterFlushAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages">resetBgwriterLruMaxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier">resetBgwriterLruMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout">resetDeadlockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression">resetDefaultToastCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout">resetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit">resetJit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration">resetLogAutovacuumMinDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity">resetLogErrorVerbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix">resetLogLinePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement">resetLogMinDurationStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles">resetLogTempFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess">resetMaxFilesPerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction">resetMaxLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers">resetMaxLogicalReplicationWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers">resetMaxParallelWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather">resetMaxParallelWorkersPerGather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction">resetMaxPredLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions">resetMaxPreparedTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots">resetMaxReplicationSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize">resetMaxSlotWalKeepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth">resetMaxStackDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay">resetMaxStandbyArchiveDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay">resetMaxStandbyStreamingDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders">resetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses">resetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer">resetPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout">resetPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval">resetPgPartmanBgwInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole">resetPgPartmanBgwRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgReadReplica">resetPgReadReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgServiceToForkFrom">resetPgServiceToForkFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable">resetPgStatMonitorEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan">resetPgStatMonitorPgsmEnableQueryPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets">resetPgStatMonitorPgsmMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack">resetPgStatStatementsTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage">resetSharedBuffersPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication">resetSynchronousReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit">resetTempFileLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb">resetTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize">resetTrackActivityQuerySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp">resetTrackCommitTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions">resetTrackFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming">resetTrackIoTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant">resetVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout">resetWalSenderTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay">resetWalWriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem">resetWorkMem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMigration` <a name="putMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration"></a>

```typescript
public putMigration(value: ManagedDatabasePostgresqlPropertiesMigration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `putPgbouncer` <a name="putPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer"></a>

```typescript
public putPgbouncer(value: ManagedDatabasePostgresqlPropertiesPgbouncer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `putPglookout` <a name="putPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout"></a>

```typescript
public putPglookout(value: ManagedDatabasePostgresqlPropertiesPglookout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `putTimescaledb` <a name="putTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb"></a>

```typescript
public putTimescaledb(value: ManagedDatabasePostgresqlPropertiesTimescaledb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername"></a>

```typescript
public resetAdminUsername(): void
```

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```typescript
public resetAutomaticUtilityNetworkIpFilter(): void
```

##### `resetAutovacuumAnalyzeScaleFactor` <a name="resetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor"></a>

```typescript
public resetAutovacuumAnalyzeScaleFactor(): void
```

##### `resetAutovacuumAnalyzeThreshold` <a name="resetAutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold"></a>

```typescript
public resetAutovacuumAnalyzeThreshold(): void
```

##### `resetAutovacuumFreezeMaxAge` <a name="resetAutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge"></a>

```typescript
public resetAutovacuumFreezeMaxAge(): void
```

##### `resetAutovacuumMaxWorkers` <a name="resetAutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers"></a>

```typescript
public resetAutovacuumMaxWorkers(): void
```

##### `resetAutovacuumNaptime` <a name="resetAutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime"></a>

```typescript
public resetAutovacuumNaptime(): void
```

##### `resetAutovacuumVacuumCostDelay` <a name="resetAutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay"></a>

```typescript
public resetAutovacuumVacuumCostDelay(): void
```

##### `resetAutovacuumVacuumCostLimit` <a name="resetAutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit"></a>

```typescript
public resetAutovacuumVacuumCostLimit(): void
```

##### `resetAutovacuumVacuumScaleFactor` <a name="resetAutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor"></a>

```typescript
public resetAutovacuumVacuumScaleFactor(): void
```

##### `resetAutovacuumVacuumThreshold` <a name="resetAutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold"></a>

```typescript
public resetAutovacuumVacuumThreshold(): void
```

##### `resetBackupHour` <a name="resetBackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour"></a>

```typescript
public resetBackupHour(): void
```

##### `resetBackupMinute` <a name="resetBackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute"></a>

```typescript
public resetBackupMinute(): void
```

##### `resetBgwriterDelay` <a name="resetBgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay"></a>

```typescript
public resetBgwriterDelay(): void
```

##### `resetBgwriterFlushAfter` <a name="resetBgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter"></a>

```typescript
public resetBgwriterFlushAfter(): void
```

##### `resetBgwriterLruMaxpages` <a name="resetBgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages"></a>

```typescript
public resetBgwriterLruMaxpages(): void
```

##### `resetBgwriterLruMultiplier` <a name="resetBgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier"></a>

```typescript
public resetBgwriterLruMultiplier(): void
```

##### `resetDeadlockTimeout` <a name="resetDeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout"></a>

```typescript
public resetDeadlockTimeout(): void
```

##### `resetDefaultToastCompression` <a name="resetDefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression"></a>

```typescript
public resetDefaultToastCompression(): void
```

##### `resetIdleInTransactionSessionTimeout` <a name="resetIdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout"></a>

```typescript
public resetIdleInTransactionSessionTimeout(): void
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter"></a>

```typescript
public resetIpFilter(): void
```

##### `resetJit` <a name="resetJit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit"></a>

```typescript
public resetJit(): void
```

##### `resetLogAutovacuumMinDuration` <a name="resetLogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration"></a>

```typescript
public resetLogAutovacuumMinDuration(): void
```

##### `resetLogErrorVerbosity` <a name="resetLogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity"></a>

```typescript
public resetLogErrorVerbosity(): void
```

##### `resetLogLinePrefix` <a name="resetLogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix"></a>

```typescript
public resetLogLinePrefix(): void
```

##### `resetLogMinDurationStatement` <a name="resetLogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement"></a>

```typescript
public resetLogMinDurationStatement(): void
```

##### `resetLogTempFiles` <a name="resetLogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles"></a>

```typescript
public resetLogTempFiles(): void
```

##### `resetMaxFilesPerProcess` <a name="resetMaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess"></a>

```typescript
public resetMaxFilesPerProcess(): void
```

##### `resetMaxLocksPerTransaction` <a name="resetMaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction"></a>

```typescript
public resetMaxLocksPerTransaction(): void
```

##### `resetMaxLogicalReplicationWorkers` <a name="resetMaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers"></a>

```typescript
public resetMaxLogicalReplicationWorkers(): void
```

##### `resetMaxParallelWorkers` <a name="resetMaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers"></a>

```typescript
public resetMaxParallelWorkers(): void
```

##### `resetMaxParallelWorkersPerGather` <a name="resetMaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather"></a>

```typescript
public resetMaxParallelWorkersPerGather(): void
```

##### `resetMaxPredLocksPerTransaction` <a name="resetMaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction"></a>

```typescript
public resetMaxPredLocksPerTransaction(): void
```

##### `resetMaxPreparedTransactions` <a name="resetMaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions"></a>

```typescript
public resetMaxPreparedTransactions(): void
```

##### `resetMaxReplicationSlots` <a name="resetMaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots"></a>

```typescript
public resetMaxReplicationSlots(): void
```

##### `resetMaxSlotWalKeepSize` <a name="resetMaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize"></a>

```typescript
public resetMaxSlotWalKeepSize(): void
```

##### `resetMaxStackDepth` <a name="resetMaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth"></a>

```typescript
public resetMaxStackDepth(): void
```

##### `resetMaxStandbyArchiveDelay` <a name="resetMaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay"></a>

```typescript
public resetMaxStandbyArchiveDelay(): void
```

##### `resetMaxStandbyStreamingDelay` <a name="resetMaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay"></a>

```typescript
public resetMaxStandbyStreamingDelay(): void
```

##### `resetMaxWalSenders` <a name="resetMaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders"></a>

```typescript
public resetMaxWalSenders(): void
```

##### `resetMaxWorkerProcesses` <a name="resetMaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses"></a>

```typescript
public resetMaxWorkerProcesses(): void
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration"></a>

```typescript
public resetMigration(): void
```

##### `resetPgbouncer` <a name="resetPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer"></a>

```typescript
public resetPgbouncer(): void
```

##### `resetPglookout` <a name="resetPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout"></a>

```typescript
public resetPglookout(): void
```

##### `resetPgPartmanBgwInterval` <a name="resetPgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval"></a>

```typescript
public resetPgPartmanBgwInterval(): void
```

##### `resetPgPartmanBgwRole` <a name="resetPgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole"></a>

```typescript
public resetPgPartmanBgwRole(): void
```

##### `resetPgReadReplica` <a name="resetPgReadReplica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgReadReplica"></a>

```typescript
public resetPgReadReplica(): void
```

##### `resetPgServiceToForkFrom` <a name="resetPgServiceToForkFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgServiceToForkFrom"></a>

```typescript
public resetPgServiceToForkFrom(): void
```

##### `resetPgStatMonitorEnable` <a name="resetPgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable"></a>

```typescript
public resetPgStatMonitorEnable(): void
```

##### `resetPgStatMonitorPgsmEnableQueryPlan` <a name="resetPgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan"></a>

```typescript
public resetPgStatMonitorPgsmEnableQueryPlan(): void
```

##### `resetPgStatMonitorPgsmMaxBuckets` <a name="resetPgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets"></a>

```typescript
public resetPgStatMonitorPgsmMaxBuckets(): void
```

##### `resetPgStatStatementsTrack` <a name="resetPgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack"></a>

```typescript
public resetPgStatStatementsTrack(): void
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess"></a>

```typescript
public resetPublicAccess(): void
```

##### `resetSharedBuffersPercentage` <a name="resetSharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage"></a>

```typescript
public resetSharedBuffersPercentage(): void
```

##### `resetSynchronousReplication` <a name="resetSynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication"></a>

```typescript
public resetSynchronousReplication(): void
```

##### `resetTempFileLimit` <a name="resetTempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit"></a>

```typescript
public resetTempFileLimit(): void
```

##### `resetTimescaledb` <a name="resetTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb"></a>

```typescript
public resetTimescaledb(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTrackActivityQuerySize` <a name="resetTrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize"></a>

```typescript
public resetTrackActivityQuerySize(): void
```

##### `resetTrackCommitTimestamp` <a name="resetTrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp"></a>

```typescript
public resetTrackCommitTimestamp(): void
```

##### `resetTrackFunctions` <a name="resetTrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions"></a>

```typescript
public resetTrackFunctions(): void
```

##### `resetTrackIoTiming` <a name="resetTrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming"></a>

```typescript
public resetTrackIoTiming(): void
```

##### `resetVariant` <a name="resetVariant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant"></a>

```typescript
public resetVariant(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetWalSenderTimeout` <a name="resetWalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout"></a>

```typescript
public resetWalSenderTimeout(): void
```

##### `resetWalWriterDelay` <a name="resetWalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay"></a>

```typescript
public resetWalWriterDelay(): void
```

##### `resetWorkMem` <a name="resetWorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem"></a>

```typescript
public resetWorkMem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer">pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout">pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb">timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput">autovacuumAnalyzeScaleFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput">autovacuumAnalyzeThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput">autovacuumFreezeMaxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput">autovacuumMaxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput">autovacuumNaptimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput">autovacuumVacuumCostDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput">autovacuumVacuumCostLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput">autovacuumVacuumScaleFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput">autovacuumVacuumThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput">backupHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput">backupMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput">bgwriterDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput">bgwriterFlushAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput">bgwriterLruMaxpagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput">bgwriterLruMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput">deadlockTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput">defaultToastCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput">idleInTransactionSessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput">jitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput">logAutovacuumMinDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput">logErrorVerbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput">logLinePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput">logMinDurationStatementInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput">logTempFilesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput">maxFilesPerProcessInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput">maxLocksPerTransactionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput">maxLogicalReplicationWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput">maxParallelWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput">maxParallelWorkersPerGatherInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput">maxPredLocksPerTransactionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput">maxPreparedTransactionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput">maxReplicationSlotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput">maxSlotWalKeepSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput">maxStackDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput">maxStandbyArchiveDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput">maxStandbyStreamingDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput">maxWalSendersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput">maxWorkerProcessesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput">pgbouncerInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput">pglookoutInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput">pgPartmanBgwIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput">pgPartmanBgwRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplicaInput">pgReadReplicaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFromInput">pgServiceToForkFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput">pgStatMonitorEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput">pgStatMonitorPgsmEnableQueryPlanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput">pgStatMonitorPgsmMaxBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput">pgStatStatementsTrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput">sharedBuffersPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput">synchronousReplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput">tempFileLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput">timescaledbInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput">trackActivityQuerySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput">trackCommitTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput">trackFunctionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput">trackIoTimingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput">variantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput">walSenderTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput">walWriterDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput">workMemInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor">autovacuumAnalyzeScaleFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold">autovacuumAnalyzeThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge">autovacuumFreezeMaxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers">autovacuumMaxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime">autovacuumNaptime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay">autovacuumVacuumCostDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit">autovacuumVacuumCostLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor">autovacuumVacuumScaleFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold">autovacuumVacuumThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour">backupHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute">backupMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay">bgwriterDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter">bgwriterFlushAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages">bgwriterLruMaxpages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier">bgwriterLruMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout">deadlockTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression">defaultToastCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout">idleInTransactionSessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit">jit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration">logAutovacuumMinDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity">logErrorVerbosity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix">logLinePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement">logMinDurationStatement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles">logTempFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess">maxFilesPerProcess</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction">maxLocksPerTransaction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers">maxLogicalReplicationWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers">maxParallelWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather">maxParallelWorkersPerGather</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction">maxPredLocksPerTransaction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions">maxPreparedTransactions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots">maxReplicationSlots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize">maxSlotWalKeepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth">maxStackDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay">maxStandbyArchiveDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay">maxStandbyStreamingDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders">maxWalSenders</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses">maxWorkerProcesses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval">pgPartmanBgwInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole">pgPartmanBgwRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplica">pgReadReplica</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFrom">pgServiceToForkFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable">pgStatMonitorEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan">pgStatMonitorPgsmEnableQueryPlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets">pgStatMonitorPgsmMaxBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack">pgStatStatementsTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage">sharedBuffersPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication">synchronousReplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit">tempFileLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize">trackActivityQuerySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp">trackCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions">trackFunctions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming">trackIoTiming</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant">variant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout">walSenderTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay">walWriterDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem">workMem</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration"></a>

```typescript
public readonly migration: ManagedDatabasePostgresqlPropertiesMigrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a>

---

##### `pgbouncer`<sup>Required</sup> <a name="pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer"></a>

```typescript
public readonly pgbouncer: ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a>

---

##### `pglookout`<sup>Required</sup> <a name="pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout"></a>

```typescript
public readonly pglookout: ManagedDatabasePostgresqlPropertiesPglookoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a>

---

##### `timescaledb`<sup>Required</sup> <a name="timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb"></a>

```typescript
public readonly timescaledb: ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```typescript
public readonly automaticUtilityNetworkIpFilterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="autovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput"></a>

```typescript
public readonly autovacuumAnalyzeScaleFactorInput: number;
```

- *Type:* number

---

##### `autovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="autovacuumAnalyzeThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput"></a>

```typescript
public readonly autovacuumAnalyzeThresholdInput: number;
```

- *Type:* number

---

##### `autovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="autovacuumFreezeMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput"></a>

```typescript
public readonly autovacuumFreezeMaxAgeInput: number;
```

- *Type:* number

---

##### `autovacuumMaxWorkersInput`<sup>Optional</sup> <a name="autovacuumMaxWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput"></a>

```typescript
public readonly autovacuumMaxWorkersInput: number;
```

- *Type:* number

---

##### `autovacuumNaptimeInput`<sup>Optional</sup> <a name="autovacuumNaptimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput"></a>

```typescript
public readonly autovacuumNaptimeInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="autovacuumVacuumCostDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput"></a>

```typescript
public readonly autovacuumVacuumCostDelayInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="autovacuumVacuumCostLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput"></a>

```typescript
public readonly autovacuumVacuumCostLimitInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="autovacuumVacuumScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput"></a>

```typescript
public readonly autovacuumVacuumScaleFactorInput: number;
```

- *Type:* number

---

##### `autovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="autovacuumVacuumThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput"></a>

```typescript
public readonly autovacuumVacuumThresholdInput: number;
```

- *Type:* number

---

##### `backupHourInput`<sup>Optional</sup> <a name="backupHourInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput"></a>

```typescript
public readonly backupHourInput: number;
```

- *Type:* number

---

##### `backupMinuteInput`<sup>Optional</sup> <a name="backupMinuteInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput"></a>

```typescript
public readonly backupMinuteInput: number;
```

- *Type:* number

---

##### `bgwriterDelayInput`<sup>Optional</sup> <a name="bgwriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput"></a>

```typescript
public readonly bgwriterDelayInput: number;
```

- *Type:* number

---

##### `bgwriterFlushAfterInput`<sup>Optional</sup> <a name="bgwriterFlushAfterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput"></a>

```typescript
public readonly bgwriterFlushAfterInput: number;
```

- *Type:* number

---

##### `bgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="bgwriterLruMaxpagesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput"></a>

```typescript
public readonly bgwriterLruMaxpagesInput: number;
```

- *Type:* number

---

##### `bgwriterLruMultiplierInput`<sup>Optional</sup> <a name="bgwriterLruMultiplierInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput"></a>

```typescript
public readonly bgwriterLruMultiplierInput: number;
```

- *Type:* number

---

##### `deadlockTimeoutInput`<sup>Optional</sup> <a name="deadlockTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput"></a>

```typescript
public readonly deadlockTimeoutInput: number;
```

- *Type:* number

---

##### `defaultToastCompressionInput`<sup>Optional</sup> <a name="defaultToastCompressionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput"></a>

```typescript
public readonly defaultToastCompressionInput: string;
```

- *Type:* string

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="idleInTransactionSessionTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput"></a>

```typescript
public readonly idleInTransactionSessionTimeoutInput: number;
```

- *Type:* number

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput"></a>

```typescript
public readonly ipFilterInput: string[];
```

- *Type:* string[]

---

##### `jitInput`<sup>Optional</sup> <a name="jitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput"></a>

```typescript
public readonly jitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAutovacuumMinDurationInput`<sup>Optional</sup> <a name="logAutovacuumMinDurationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput"></a>

```typescript
public readonly logAutovacuumMinDurationInput: number;
```

- *Type:* number

---

##### `logErrorVerbosityInput`<sup>Optional</sup> <a name="logErrorVerbosityInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput"></a>

```typescript
public readonly logErrorVerbosityInput: string;
```

- *Type:* string

---

##### `logLinePrefixInput`<sup>Optional</sup> <a name="logLinePrefixInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput"></a>

```typescript
public readonly logLinePrefixInput: string;
```

- *Type:* string

---

##### `logMinDurationStatementInput`<sup>Optional</sup> <a name="logMinDurationStatementInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput"></a>

```typescript
public readonly logMinDurationStatementInput: number;
```

- *Type:* number

---

##### `logTempFilesInput`<sup>Optional</sup> <a name="logTempFilesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput"></a>

```typescript
public readonly logTempFilesInput: number;
```

- *Type:* number

---

##### `maxFilesPerProcessInput`<sup>Optional</sup> <a name="maxFilesPerProcessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput"></a>

```typescript
public readonly maxFilesPerProcessInput: number;
```

- *Type:* number

---

##### `maxLocksPerTransactionInput`<sup>Optional</sup> <a name="maxLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput"></a>

```typescript
public readonly maxLocksPerTransactionInput: number;
```

- *Type:* number

---

##### `maxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="maxLogicalReplicationWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput"></a>

```typescript
public readonly maxLogicalReplicationWorkersInput: number;
```

- *Type:* number

---

##### `maxParallelWorkersInput`<sup>Optional</sup> <a name="maxParallelWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput"></a>

```typescript
public readonly maxParallelWorkersInput: number;
```

- *Type:* number

---

##### `maxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="maxParallelWorkersPerGatherInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput"></a>

```typescript
public readonly maxParallelWorkersPerGatherInput: number;
```

- *Type:* number

---

##### `maxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="maxPredLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput"></a>

```typescript
public readonly maxPredLocksPerTransactionInput: number;
```

- *Type:* number

---

##### `maxPreparedTransactionsInput`<sup>Optional</sup> <a name="maxPreparedTransactionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput"></a>

```typescript
public readonly maxPreparedTransactionsInput: number;
```

- *Type:* number

---

##### `maxReplicationSlotsInput`<sup>Optional</sup> <a name="maxReplicationSlotsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput"></a>

```typescript
public readonly maxReplicationSlotsInput: number;
```

- *Type:* number

---

##### `maxSlotWalKeepSizeInput`<sup>Optional</sup> <a name="maxSlotWalKeepSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput"></a>

```typescript
public readonly maxSlotWalKeepSizeInput: number;
```

- *Type:* number

---

##### `maxStackDepthInput`<sup>Optional</sup> <a name="maxStackDepthInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput"></a>

```typescript
public readonly maxStackDepthInput: number;
```

- *Type:* number

---

##### `maxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="maxStandbyArchiveDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput"></a>

```typescript
public readonly maxStandbyArchiveDelayInput: number;
```

- *Type:* number

---

##### `maxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="maxStandbyStreamingDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput"></a>

```typescript
public readonly maxStandbyStreamingDelayInput: number;
```

- *Type:* number

---

##### `maxWalSendersInput`<sup>Optional</sup> <a name="maxWalSendersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput"></a>

```typescript
public readonly maxWalSendersInput: number;
```

- *Type:* number

---

##### `maxWorkerProcessesInput`<sup>Optional</sup> <a name="maxWorkerProcessesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput"></a>

```typescript
public readonly maxWorkerProcessesInput: number;
```

- *Type:* number

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput"></a>

```typescript
public readonly migrationInput: ManagedDatabasePostgresqlPropertiesMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `pgbouncerInput`<sup>Optional</sup> <a name="pgbouncerInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput"></a>

```typescript
public readonly pgbouncerInput: ManagedDatabasePostgresqlPropertiesPgbouncer;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `pglookoutInput`<sup>Optional</sup> <a name="pglookoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput"></a>

```typescript
public readonly pglookoutInput: ManagedDatabasePostgresqlPropertiesPglookout;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `pgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="pgPartmanBgwIntervalInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput"></a>

```typescript
public readonly pgPartmanBgwIntervalInput: number;
```

- *Type:* number

---

##### `pgPartmanBgwRoleInput`<sup>Optional</sup> <a name="pgPartmanBgwRoleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput"></a>

```typescript
public readonly pgPartmanBgwRoleInput: string;
```

- *Type:* string

---

##### `pgReadReplicaInput`<sup>Optional</sup> <a name="pgReadReplicaInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplicaInput"></a>

```typescript
public readonly pgReadReplicaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgServiceToForkFromInput`<sup>Optional</sup> <a name="pgServiceToForkFromInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFromInput"></a>

```typescript
public readonly pgServiceToForkFromInput: string;
```

- *Type:* string

---

##### `pgStatMonitorEnableInput`<sup>Optional</sup> <a name="pgStatMonitorEnableInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput"></a>

```typescript
public readonly pgStatMonitorEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgStatMonitorPgsmEnableQueryPlanInput`<sup>Optional</sup> <a name="pgStatMonitorPgsmEnableQueryPlanInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput"></a>

```typescript
public readonly pgStatMonitorPgsmEnableQueryPlanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgStatMonitorPgsmMaxBucketsInput`<sup>Optional</sup> <a name="pgStatMonitorPgsmMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput"></a>

```typescript
public readonly pgStatMonitorPgsmMaxBucketsInput: number;
```

- *Type:* number

---

##### `pgStatStatementsTrackInput`<sup>Optional</sup> <a name="pgStatStatementsTrackInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput"></a>

```typescript
public readonly pgStatStatementsTrackInput: string;
```

- *Type:* string

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput"></a>

```typescript
public readonly publicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedBuffersPercentageInput`<sup>Optional</sup> <a name="sharedBuffersPercentageInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput"></a>

```typescript
public readonly sharedBuffersPercentageInput: number;
```

- *Type:* number

---

##### `synchronousReplicationInput`<sup>Optional</sup> <a name="synchronousReplicationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput"></a>

```typescript
public readonly synchronousReplicationInput: string;
```

- *Type:* string

---

##### `tempFileLimitInput`<sup>Optional</sup> <a name="tempFileLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput"></a>

```typescript
public readonly tempFileLimitInput: number;
```

- *Type:* number

---

##### `timescaledbInput`<sup>Optional</sup> <a name="timescaledbInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput"></a>

```typescript
public readonly timescaledbInput: ManagedDatabasePostgresqlPropertiesTimescaledb;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `trackActivityQuerySizeInput`<sup>Optional</sup> <a name="trackActivityQuerySizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput"></a>

```typescript
public readonly trackActivityQuerySizeInput: number;
```

- *Type:* number

---

##### `trackCommitTimestampInput`<sup>Optional</sup> <a name="trackCommitTimestampInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput"></a>

```typescript
public readonly trackCommitTimestampInput: string;
```

- *Type:* string

---

##### `trackFunctionsInput`<sup>Optional</sup> <a name="trackFunctionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput"></a>

```typescript
public readonly trackFunctionsInput: string;
```

- *Type:* string

---

##### `trackIoTimingInput`<sup>Optional</sup> <a name="trackIoTimingInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput"></a>

```typescript
public readonly trackIoTimingInput: string;
```

- *Type:* string

---

##### `variantInput`<sup>Optional</sup> <a name="variantInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput"></a>

```typescript
public readonly variantInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `walSenderTimeoutInput`<sup>Optional</sup> <a name="walSenderTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput"></a>

```typescript
public readonly walSenderTimeoutInput: number;
```

- *Type:* number

---

##### `walWriterDelayInput`<sup>Optional</sup> <a name="walWriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput"></a>

```typescript
public readonly walWriterDelayInput: number;
```

- *Type:* number

---

##### `workMemInput`<sup>Optional</sup> <a name="workMemInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput"></a>

```typescript
public readonly workMemInput: number;
```

- *Type:* number

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```typescript
public readonly automaticUtilityNetworkIpFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="autovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor"></a>

```typescript
public readonly autovacuumAnalyzeScaleFactor: number;
```

- *Type:* number

---

##### `autovacuumAnalyzeThreshold`<sup>Required</sup> <a name="autovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold"></a>

```typescript
public readonly autovacuumAnalyzeThreshold: number;
```

- *Type:* number

---

##### `autovacuumFreezeMaxAge`<sup>Required</sup> <a name="autovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge"></a>

```typescript
public readonly autovacuumFreezeMaxAge: number;
```

- *Type:* number

---

##### `autovacuumMaxWorkers`<sup>Required</sup> <a name="autovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers"></a>

```typescript
public readonly autovacuumMaxWorkers: number;
```

- *Type:* number

---

##### `autovacuumNaptime`<sup>Required</sup> <a name="autovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime"></a>

```typescript
public readonly autovacuumNaptime: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostDelay`<sup>Required</sup> <a name="autovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay"></a>

```typescript
public readonly autovacuumVacuumCostDelay: number;
```

- *Type:* number

---

##### `autovacuumVacuumCostLimit`<sup>Required</sup> <a name="autovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit"></a>

```typescript
public readonly autovacuumVacuumCostLimit: number;
```

- *Type:* number

---

##### `autovacuumVacuumScaleFactor`<sup>Required</sup> <a name="autovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor"></a>

```typescript
public readonly autovacuumVacuumScaleFactor: number;
```

- *Type:* number

---

##### `autovacuumVacuumThreshold`<sup>Required</sup> <a name="autovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold"></a>

```typescript
public readonly autovacuumVacuumThreshold: number;
```

- *Type:* number

---

##### `backupHour`<sup>Required</sup> <a name="backupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour"></a>

```typescript
public readonly backupHour: number;
```

- *Type:* number

---

##### `backupMinute`<sup>Required</sup> <a name="backupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute"></a>

```typescript
public readonly backupMinute: number;
```

- *Type:* number

---

##### `bgwriterDelay`<sup>Required</sup> <a name="bgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay"></a>

```typescript
public readonly bgwriterDelay: number;
```

- *Type:* number

---

##### `bgwriterFlushAfter`<sup>Required</sup> <a name="bgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter"></a>

```typescript
public readonly bgwriterFlushAfter: number;
```

- *Type:* number

---

##### `bgwriterLruMaxpages`<sup>Required</sup> <a name="bgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages"></a>

```typescript
public readonly bgwriterLruMaxpages: number;
```

- *Type:* number

---

##### `bgwriterLruMultiplier`<sup>Required</sup> <a name="bgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier"></a>

```typescript
public readonly bgwriterLruMultiplier: number;
```

- *Type:* number

---

##### `deadlockTimeout`<sup>Required</sup> <a name="deadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout"></a>

```typescript
public readonly deadlockTimeout: number;
```

- *Type:* number

---

##### `defaultToastCompression`<sup>Required</sup> <a name="defaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression"></a>

```typescript
public readonly defaultToastCompression: string;
```

- *Type:* string

---

##### `idleInTransactionSessionTimeout`<sup>Required</sup> <a name="idleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* number

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter"></a>

```typescript
public readonly ipFilter: string[];
```

- *Type:* string[]

---

##### `jit`<sup>Required</sup> <a name="jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit"></a>

```typescript
public readonly jit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAutovacuumMinDuration`<sup>Required</sup> <a name="logAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration"></a>

```typescript
public readonly logAutovacuumMinDuration: number;
```

- *Type:* number

---

##### `logErrorVerbosity`<sup>Required</sup> <a name="logErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity"></a>

```typescript
public readonly logErrorVerbosity: string;
```

- *Type:* string

---

##### `logLinePrefix`<sup>Required</sup> <a name="logLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix"></a>

```typescript
public readonly logLinePrefix: string;
```

- *Type:* string

---

##### `logMinDurationStatement`<sup>Required</sup> <a name="logMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement"></a>

```typescript
public readonly logMinDurationStatement: number;
```

- *Type:* number

---

##### `logTempFiles`<sup>Required</sup> <a name="logTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles"></a>

```typescript
public readonly logTempFiles: number;
```

- *Type:* number

---

##### `maxFilesPerProcess`<sup>Required</sup> <a name="maxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess"></a>

```typescript
public readonly maxFilesPerProcess: number;
```

- *Type:* number

---

##### `maxLocksPerTransaction`<sup>Required</sup> <a name="maxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction"></a>

```typescript
public readonly maxLocksPerTransaction: number;
```

- *Type:* number

---

##### `maxLogicalReplicationWorkers`<sup>Required</sup> <a name="maxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers"></a>

```typescript
public readonly maxLogicalReplicationWorkers: number;
```

- *Type:* number

---

##### `maxParallelWorkers`<sup>Required</sup> <a name="maxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers"></a>

```typescript
public readonly maxParallelWorkers: number;
```

- *Type:* number

---

##### `maxParallelWorkersPerGather`<sup>Required</sup> <a name="maxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather"></a>

```typescript
public readonly maxParallelWorkersPerGather: number;
```

- *Type:* number

---

##### `maxPredLocksPerTransaction`<sup>Required</sup> <a name="maxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction"></a>

```typescript
public readonly maxPredLocksPerTransaction: number;
```

- *Type:* number

---

##### `maxPreparedTransactions`<sup>Required</sup> <a name="maxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions"></a>

```typescript
public readonly maxPreparedTransactions: number;
```

- *Type:* number

---

##### `maxReplicationSlots`<sup>Required</sup> <a name="maxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots"></a>

```typescript
public readonly maxReplicationSlots: number;
```

- *Type:* number

---

##### `maxSlotWalKeepSize`<sup>Required</sup> <a name="maxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize"></a>

```typescript
public readonly maxSlotWalKeepSize: number;
```

- *Type:* number

---

##### `maxStackDepth`<sup>Required</sup> <a name="maxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth"></a>

```typescript
public readonly maxStackDepth: number;
```

- *Type:* number

---

##### `maxStandbyArchiveDelay`<sup>Required</sup> <a name="maxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay"></a>

```typescript
public readonly maxStandbyArchiveDelay: number;
```

- *Type:* number

---

##### `maxStandbyStreamingDelay`<sup>Required</sup> <a name="maxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay"></a>

```typescript
public readonly maxStandbyStreamingDelay: number;
```

- *Type:* number

---

##### `maxWalSenders`<sup>Required</sup> <a name="maxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders"></a>

```typescript
public readonly maxWalSenders: number;
```

- *Type:* number

---

##### `maxWorkerProcesses`<sup>Required</sup> <a name="maxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses"></a>

```typescript
public readonly maxWorkerProcesses: number;
```

- *Type:* number

---

##### `pgPartmanBgwInterval`<sup>Required</sup> <a name="pgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval"></a>

```typescript
public readonly pgPartmanBgwInterval: number;
```

- *Type:* number

---

##### `pgPartmanBgwRole`<sup>Required</sup> <a name="pgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole"></a>

```typescript
public readonly pgPartmanBgwRole: string;
```

- *Type:* string

---

##### `pgReadReplica`<sup>Required</sup> <a name="pgReadReplica" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgReadReplica"></a>

```typescript
public readonly pgReadReplica: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgServiceToForkFrom`<sup>Required</sup> <a name="pgServiceToForkFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgServiceToForkFrom"></a>

```typescript
public readonly pgServiceToForkFrom: string;
```

- *Type:* string

---

##### `pgStatMonitorEnable`<sup>Required</sup> <a name="pgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable"></a>

```typescript
public readonly pgStatMonitorEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgStatMonitorPgsmEnableQueryPlan`<sup>Required</sup> <a name="pgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```typescript
public readonly pgStatMonitorPgsmEnableQueryPlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgStatMonitorPgsmMaxBuckets`<sup>Required</sup> <a name="pgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets"></a>

```typescript
public readonly pgStatMonitorPgsmMaxBuckets: number;
```

- *Type:* number

---

##### `pgStatStatementsTrack`<sup>Required</sup> <a name="pgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack"></a>

```typescript
public readonly pgStatStatementsTrack: string;
```

- *Type:* string

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess"></a>

```typescript
public readonly publicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedBuffersPercentage`<sup>Required</sup> <a name="sharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage"></a>

```typescript
public readonly sharedBuffersPercentage: number;
```

- *Type:* number

---

##### `synchronousReplication`<sup>Required</sup> <a name="synchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication"></a>

```typescript
public readonly synchronousReplication: string;
```

- *Type:* string

---

##### `tempFileLimit`<sup>Required</sup> <a name="tempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit"></a>

```typescript
public readonly tempFileLimit: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `trackActivityQuerySize`<sup>Required</sup> <a name="trackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize"></a>

```typescript
public readonly trackActivityQuerySize: number;
```

- *Type:* number

---

##### `trackCommitTimestamp`<sup>Required</sup> <a name="trackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp"></a>

```typescript
public readonly trackCommitTimestamp: string;
```

- *Type:* string

---

##### `trackFunctions`<sup>Required</sup> <a name="trackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions"></a>

```typescript
public readonly trackFunctions: string;
```

- *Type:* string

---

##### `trackIoTiming`<sup>Required</sup> <a name="trackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming"></a>

```typescript
public readonly trackIoTiming: string;
```

- *Type:* string

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant"></a>

```typescript
public readonly variant: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `walSenderTimeout`<sup>Required</sup> <a name="walSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout"></a>

```typescript
public readonly walSenderTimeout: number;
```

- *Type:* number

---

##### `walWriterDelay`<sup>Required</sup> <a name="walWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay"></a>

```typescript
public readonly walWriterDelay: number;
```

- *Type:* number

---

##### `workMem`<sup>Required</sup> <a name="workMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem"></a>

```typescript
public readonly workMem: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---


### ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout">resetAutodbIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections">resetAutodbMaxDbConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode">resetAutodbPoolMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize">resetAutodbPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters">resetIgnoreStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize">resetMinPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout">resetServerIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime">resetServerLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways">resetServerResetQueryAlways</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutodbIdleTimeout` <a name="resetAutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```typescript
public resetAutodbIdleTimeout(): void
```

##### `resetAutodbMaxDbConnections` <a name="resetAutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```typescript
public resetAutodbMaxDbConnections(): void
```

##### `resetAutodbPoolMode` <a name="resetAutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode"></a>

```typescript
public resetAutodbPoolMode(): void
```

##### `resetAutodbPoolSize` <a name="resetAutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize"></a>

```typescript
public resetAutodbPoolSize(): void
```

##### `resetIgnoreStartupParameters` <a name="resetIgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```typescript
public resetIgnoreStartupParameters(): void
```

##### `resetMinPoolSize` <a name="resetMinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize"></a>

```typescript
public resetMinPoolSize(): void
```

##### `resetServerIdleTimeout` <a name="resetServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout"></a>

```typescript
public resetServerIdleTimeout(): void
```

##### `resetServerLifetime` <a name="resetServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime"></a>

```typescript
public resetServerLifetime(): void
```

##### `resetServerResetQueryAlways` <a name="resetServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```typescript
public resetServerResetQueryAlways(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput">autodbIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">autodbMaxDbConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput">autodbPoolModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput">autodbPoolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput">ignoreStartupParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput">minPoolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput">serverIdleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput">serverLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput">serverResetQueryAlwaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout">autodbIdleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections">autodbMaxDbConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode">autodbPoolMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize">autodbPoolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters">ignoreStartupParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize">minPoolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout">serverIdleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime">serverLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways">serverResetQueryAlways</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autodbIdleTimeoutInput`<sup>Optional</sup> <a name="autodbIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```typescript
public readonly autodbIdleTimeoutInput: number;
```

- *Type:* number

---

##### `autodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="autodbMaxDbConnectionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```typescript
public readonly autodbMaxDbConnectionsInput: number;
```

- *Type:* number

---

##### `autodbPoolModeInput`<sup>Optional</sup> <a name="autodbPoolModeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```typescript
public readonly autodbPoolModeInput: string;
```

- *Type:* string

---

##### `autodbPoolSizeInput`<sup>Optional</sup> <a name="autodbPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```typescript
public readonly autodbPoolSizeInput: number;
```

- *Type:* number

---

##### `ignoreStartupParametersInput`<sup>Optional</sup> <a name="ignoreStartupParametersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```typescript
public readonly ignoreStartupParametersInput: string[];
```

- *Type:* string[]

---

##### `minPoolSizeInput`<sup>Optional</sup> <a name="minPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput"></a>

```typescript
public readonly minPoolSizeInput: number;
```

- *Type:* number

---

##### `serverIdleTimeoutInput`<sup>Optional</sup> <a name="serverIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```typescript
public readonly serverIdleTimeoutInput: number;
```

- *Type:* number

---

##### `serverLifetimeInput`<sup>Optional</sup> <a name="serverLifetimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput"></a>

```typescript
public readonly serverLifetimeInput: number;
```

- *Type:* number

---

##### `serverResetQueryAlwaysInput`<sup>Optional</sup> <a name="serverResetQueryAlwaysInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```typescript
public readonly serverResetQueryAlwaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autodbIdleTimeout`<sup>Required</sup> <a name="autodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```typescript
public readonly autodbIdleTimeout: number;
```

- *Type:* number

---

##### `autodbMaxDbConnections`<sup>Required</sup> <a name="autodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```typescript
public readonly autodbMaxDbConnections: number;
```

- *Type:* number

---

##### `autodbPoolMode`<sup>Required</sup> <a name="autodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode"></a>

```typescript
public readonly autodbPoolMode: string;
```

- *Type:* string

---

##### `autodbPoolSize`<sup>Required</sup> <a name="autodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize"></a>

```typescript
public readonly autodbPoolSize: number;
```

- *Type:* number

---

##### `ignoreStartupParameters`<sup>Required</sup> <a name="ignoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```typescript
public readonly ignoreStartupParameters: string[];
```

- *Type:* string[]

---

##### `minPoolSize`<sup>Required</sup> <a name="minPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize"></a>

```typescript
public readonly minPoolSize: number;
```

- *Type:* number

---

##### `serverIdleTimeout`<sup>Required</sup> <a name="serverIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout"></a>

```typescript
public readonly serverIdleTimeout: number;
```

- *Type:* number

---

##### `serverLifetime`<sup>Required</sup> <a name="serverLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime"></a>

```typescript
public readonly serverLifetime: number;
```

- *Type:* number

---

##### `serverResetQueryAlways`<sup>Required</sup> <a name="serverResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```typescript
public readonly serverResetQueryAlways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlPropertiesPgbouncer;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---


### ManagedDatabasePostgresqlPropertiesPglookoutOutputReference <a name="ManagedDatabasePostgresqlPropertiesPglookoutOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag">resetMaxFailoverReplicationTimeLag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxFailoverReplicationTimeLag` <a name="resetMaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag"></a>

```typescript
public resetMaxFailoverReplicationTimeLag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput">maxFailoverReplicationTimeLagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag">maxFailoverReplicationTimeLag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxFailoverReplicationTimeLagInput`<sup>Optional</sup> <a name="maxFailoverReplicationTimeLagInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput"></a>

```typescript
public readonly maxFailoverReplicationTimeLagInput: number;
```

- *Type:* number

---

##### `maxFailoverReplicationTimeLag`<sup>Required</sup> <a name="maxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag"></a>

```typescript
public readonly maxFailoverReplicationTimeLag: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlPropertiesPglookout;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---


### ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference <a name="ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer"></a>

```typescript
import { managedDatabasePostgresql } from '@cdktf/provider-upcloud'

new managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers">resetMaxBackgroundWorkers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackgroundWorkers` <a name="resetMaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```typescript
public resetMaxBackgroundWorkers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput">maxBackgroundWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers">maxBackgroundWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBackgroundWorkersInput`<sup>Optional</sup> <a name="maxBackgroundWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```typescript
public readonly maxBackgroundWorkersInput: number;
```

- *Type:* number

---

##### `maxBackgroundWorkers`<sup>Required</sup> <a name="maxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```typescript
public readonly maxBackgroundWorkers: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabasePostgresqlPropertiesTimescaledb;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---



