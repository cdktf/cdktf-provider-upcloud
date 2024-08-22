# `managedDatabaseOpensearch` Submodule <a name="`managedDatabaseOpensearch` Submodule" id="@cdktf/provider-upcloud.managedDatabaseOpensearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseOpensearch <a name="ManagedDatabaseOpensearch" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearch(scope: Construct, id: string, config: ManagedDatabaseOpensearchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig">ManagedDatabaseOpensearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig">ManagedDatabaseOpensearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl">resetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl">resetExtendedAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork"></a>

```typescript
public putNetwork(value: IResolvable | ManagedDatabaseOpensearchNetwork[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties"></a>

```typescript
public putProperties(value: ManagedDatabaseOpensearchProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `resetAccessControl` <a name="resetAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl"></a>

```typescript
public resetAccessControl(): void
```

##### `resetExtendedAccessControl` <a name="resetExtendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl"></a>

```typescript
public resetExtendedAccessControl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow"></a>

```typescript
public resetMaintenanceWindowDow(): void
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime"></a>

```typescript
public resetMaintenanceWindowTime(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered"></a>

```typescript
public resetPowered(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties"></a>

```typescript
public resetProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabaseOpensearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabaseOpensearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList">ManagedDatabaseOpensearchNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase">primaryDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost">serviceHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword">servicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort">servicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername">serviceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput">accessControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput">extendedAccessControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput">poweredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl">accessControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl">extendedAccessControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered">powered</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components"></a>

```typescript
public readonly components: ManagedDatabaseOpensearchComponentsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.network"></a>

```typescript
public readonly network: ManagedDatabaseOpensearchNetworkList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList">ManagedDatabaseOpensearchNetworkList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates"></a>

```typescript
public readonly nodeStates: ManagedDatabaseOpensearchNodeStatesList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase"></a>

```typescript
public readonly primaryDatabase: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties"></a>

```typescript
public readonly properties: ManagedDatabaseOpensearchPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost"></a>

```typescript
public readonly serviceHost: string;
```

- *Type:* string

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword"></a>

```typescript
public readonly servicePassword: string;
```

- *Type:* string

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort"></a>

```typescript
public readonly servicePort: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername"></a>

```typescript
public readonly serviceUsername: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `accessControlInput`<sup>Optional</sup> <a name="accessControlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput"></a>

```typescript
public readonly accessControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedAccessControlInput`<sup>Optional</sup> <a name="extendedAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput"></a>

```typescript
public readonly extendedAccessControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput"></a>

```typescript
public readonly maintenanceWindowDowInput: string;
```

- *Type:* string

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput"></a>

```typescript
public readonly maintenanceWindowTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | ManagedDatabaseOpensearchNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput"></a>

```typescript
public readonly poweredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: ManagedDatabaseOpensearchProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl"></a>

```typescript
public readonly accessControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedAccessControl`<sup>Required</sup> <a name="extendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl"></a>

```typescript
public readonly extendedAccessControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow"></a>

```typescript
public readonly maintenanceWindowDow: string;
```

- *Type:* string

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime"></a>

```typescript
public readonly maintenanceWindowTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered"></a>

```typescript
public readonly powered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseOpensearchComponents <a name="ManagedDatabaseOpensearchComponents" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchComponents: managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents = { ... }
```


### ManagedDatabaseOpensearchConfig <a name="ManagedDatabaseOpensearchConfig" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchConfig: managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name">name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan">plan</a></code> | <code>string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title">title</a></code> | <code>string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl">accessControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables users access control for OpenSearch service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl">extendedAccessControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.network">network</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered">powered</a></code> | <code>boolean \| cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl"></a>

```typescript
public readonly accessControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables users access control for OpenSearch service.

User access control rules will only be enforced if this attribute is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}

---

##### `extendedAccessControl`<sup>Optional</sup> <a name="extendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl"></a>

```typescript
public readonly extendedAccessControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs.

Users are limited to perform operations on indices based on the user-specific access control rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#labels ManagedDatabaseOpensearch#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow"></a>

```typescript
public readonly maintenanceWindowDow: string;
```

- *Type:* string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime"></a>

```typescript
public readonly maintenanceWindowTime: string;
```

- *Type:* string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.network"></a>

```typescript
public readonly network: IResolvable | ManagedDatabaseOpensearchNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered"></a>

```typescript
public readonly powered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties"></a>

```typescript
public readonly properties: ManagedDatabaseOpensearchProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}

---

### ManagedDatabaseOpensearchNetwork <a name="ManagedDatabaseOpensearchNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchNetwork: managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.family">family</a></code> | <code>string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.name">name</a></code> | <code>string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.type">type</a></code> | <code>string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.uuid">uuid</a></code> | <code>string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#family ManagedDatabaseOpensearch#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#uuid ManagedDatabaseOpensearch#uuid}

---

### ManagedDatabaseOpensearchNodeStates <a name="ManagedDatabaseOpensearchNodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchNodeStates: managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates = { ... }
```


### ManagedDatabaseOpensearchProperties <a name="ManagedDatabaseOpensearchProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchProperties: managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require explicit index names when deleting. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.authFailureListeners">authFailureListeners</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | auth_failure_listeners block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.azureMigration">azureMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a></code> | azure_migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>number</code> | Controls the number of shards allowed in the cluster per data node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>number</code> | Concurrent incoming/outgoing shard recoveries per node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.customDomain">customDomain</a></code> | <code>string</code> | Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderName">emailSenderName</a></code> | <code>string</code> | Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderPassword">emailSenderPassword</a></code> | <code>string</code> | Sender password for Opensearch alerts to authenticate with SMTP server. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderUsername">emailSenderUsername</a></code> | <code>string</code> | Sender username for Opensearch alerts. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable/Disable security audit. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.gcsMigration">gcsMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a></code> | gcs_migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxContentLength">httpMaxContentLength</a></code> | <code>number</code> | Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxHeaderSize">httpMaxHeaderSize</a></code> | <code>number</code> | The max size of allowed headers, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxInitialLineLength">httpMaxInitialLineLength</a></code> | <code>number</code> | The max length of an HTTP URL, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexPatterns">indexPatterns</a></code> | <code>string[]</code> | Index patterns. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexRollup">indexRollup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | index_rollup block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexTemplate">indexTemplate</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | index_template block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesFielddataCacheSize">indicesFielddataCacheSize</a></code> | <code>number</code> | Relative amount. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryIndexBufferSize">indicesMemoryIndexBufferSize</a></code> | <code>number</code> | Percentage value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMaxIndexBufferSize">indicesMemoryMaxIndexBufferSize</a></code> | <code>number</code> | Absolute value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMinIndexBufferSize">indicesMemoryMinIndexBufferSize</a></code> | <code>number</code> | Absolute value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>number</code> | Percentage value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>number</code> | Maximum number of clauses Lucene BooleanQuery can have. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxBytesPerSec">indicesRecoveryMaxBytesPerSec</a></code> | <code>number</code> | Limits total inbound and outbound recovery traffic for each node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>number</code> | Number of file chunks sent in parallel for each recovery. Defaults to 2. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter">ipFilter</a></code> | <code>string[]</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismEnabled">ismEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether ISM is enabled or not. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxAge">ismHistoryMaxAge</a></code> | <code>number</code> | The maximum age before rolling over the audit history index in hours. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>number</code> | The maximum number of documents before rolling over the audit history index. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverCheckPeriod">ismHistoryRolloverCheckPeriod</a></code> | <code>number</code> | The time between rollover checks for the audit history index in hours. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverRetentionPeriod">ismHistoryRolloverRetentionPeriod</a></code> | <code>number</code> | How long audit history indices are kept in days. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.keepIndexRefreshInterval">keepIndexRefreshInterval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerEnabled">knnMemoryCircuitBreakerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable KNN memory circuit breaker. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerLimit">knnMemoryCircuitBreakerLimit</a></code> | <code>number</code> | Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.openid">openid</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | openid block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.opensearchDashboards">opensearchDashboards</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | opensearch_dashboards block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.pluginsAlertingFilterByBackendRoles">pluginsAlertingFilterByBackendRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess">publicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>string[]</code> | Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.s3Migration">s3Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a></code> | s3_migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>string</code> | Script max compilation rate - circuit breaker to prevent/minimize OOMs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>number</code> | Maximum number of aggregation buckets allowed in a single response. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.serviceLog">serviceLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>number</code> | analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>number</code> | analyze thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>number</code> | force_merge thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>number</code> | get thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>number</code> | get thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>number</code> | search thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>number</code> | search thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>number</code> | search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>number</code> | search_throttled thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>number</code> | write thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>number</code> | write thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version">version</a></code> | <code>string</code> | OpenSearch major version. |

---

##### `actionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionAutoCreateIndexEnabled"></a>

```typescript
public readonly actionAutoCreateIndexEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#action_auto_create_index_enabled ManagedDatabaseOpensearch#action_auto_create_index_enabled}

---

##### `actionDestructiveRequiresName`<sup>Optional</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionDestructiveRequiresName"></a>

```typescript
public readonly actionDestructiveRequiresName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require explicit index names when deleting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#action_destructive_requires_name ManagedDatabaseOpensearch#action_destructive_requires_name}

---

##### `authFailureListeners`<sup>Optional</sup> <a name="authFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.authFailureListeners"></a>

```typescript
public readonly authFailureListeners: ManagedDatabaseOpensearchPropertiesAuthFailureListeners;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

auth_failure_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#auth_failure_listeners ManagedDatabaseOpensearch#auth_failure_listeners}

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter"></a>

```typescript
public readonly automaticUtilityNetworkIpFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}

---

##### `azureMigration`<sup>Optional</sup> <a name="azureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.azureMigration"></a>

```typescript
public readonly azureMigration: ManagedDatabaseOpensearchPropertiesAzureMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

azure_migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#azure_migration ManagedDatabaseOpensearch#azure_migration}

---

##### `clusterMaxShardsPerNode`<sup>Optional</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterMaxShardsPerNode"></a>

```typescript
public readonly clusterMaxShardsPerNode: number;
```

- *Type:* number

Controls the number of shards allowed in the cluster per data node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#cluster_max_shards_per_node ManagedDatabaseOpensearch#cluster_max_shards_per_node}

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```typescript
public readonly clusterRoutingAllocationNodeConcurrentRecoveries: number;
```

- *Type:* number

Concurrent incoming/outgoing shard recoveries per node.

How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#cluster_routing_allocation_node_concurrent_recoveries ManagedDatabaseOpensearch#cluster_routing_allocation_node_concurrent_recoveries}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#custom_domain ManagedDatabaseOpensearch#custom_domain}

---

##### `emailSenderName`<sup>Optional</sup> <a name="emailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderName"></a>

```typescript
public readonly emailSenderName: string;
```

- *Type:* string

Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore.

This should be identical to the Sender name defined in Opensearch dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#email_sender_name ManagedDatabaseOpensearch#email_sender_name}

---

##### `emailSenderPassword`<sup>Optional</sup> <a name="emailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderPassword"></a>

```typescript
public readonly emailSenderPassword: string;
```

- *Type:* string

Sender password for Opensearch alerts to authenticate with SMTP server.

Sender password for Opensearch alerts to authenticate with SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#email_sender_password ManagedDatabaseOpensearch#email_sender_password}

---

##### `emailSenderUsername`<sup>Optional</sup> <a name="emailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderUsername"></a>

```typescript
public readonly emailSenderUsername: string;
```

- *Type:* string

Sender username for Opensearch alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#email_sender_username ManagedDatabaseOpensearch#email_sender_username}

---

##### `enableSecurityAudit`<sup>Optional</sup> <a name="enableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableSecurityAudit"></a>

```typescript
public readonly enableSecurityAudit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable/Disable security audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#enable_security_audit ManagedDatabaseOpensearch#enable_security_audit}

---

##### `gcsMigration`<sup>Optional</sup> <a name="gcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.gcsMigration"></a>

```typescript
public readonly gcsMigration: ManagedDatabaseOpensearchPropertiesGcsMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

gcs_migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#gcs_migration ManagedDatabaseOpensearch#gcs_migration}

---

##### `httpMaxContentLength`<sup>Optional</sup> <a name="httpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxContentLength"></a>

```typescript
public readonly httpMaxContentLength: number;
```

- *Type:* number

Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#http_max_content_length ManagedDatabaseOpensearch#http_max_content_length}

---

##### `httpMaxHeaderSize`<sup>Optional</sup> <a name="httpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxHeaderSize"></a>

```typescript
public readonly httpMaxHeaderSize: number;
```

- *Type:* number

The max size of allowed headers, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#http_max_header_size ManagedDatabaseOpensearch#http_max_header_size}

---

##### `httpMaxInitialLineLength`<sup>Optional</sup> <a name="httpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxInitialLineLength"></a>

```typescript
public readonly httpMaxInitialLineLength: number;
```

- *Type:* number

The max length of an HTTP URL, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#http_max_initial_line_length ManagedDatabaseOpensearch#http_max_initial_line_length}

---

##### `indexPatterns`<sup>Optional</sup> <a name="indexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexPatterns"></a>

```typescript
public readonly indexPatterns: string[];
```

- *Type:* string[]

Index patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#index_patterns ManagedDatabaseOpensearch#index_patterns}

---

##### `indexRollup`<sup>Optional</sup> <a name="indexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexRollup"></a>

```typescript
public readonly indexRollup: ManagedDatabaseOpensearchPropertiesIndexRollup;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

index_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#index_rollup ManagedDatabaseOpensearch#index_rollup}

---

##### `indexTemplate`<sup>Optional</sup> <a name="indexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexTemplate"></a>

```typescript
public readonly indexTemplate: ManagedDatabaseOpensearchPropertiesIndexTemplate;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

index_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#index_template ManagedDatabaseOpensearch#index_template}

---

##### `indicesFielddataCacheSize`<sup>Optional</sup> <a name="indicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesFielddataCacheSize"></a>

```typescript
public readonly indicesFielddataCacheSize: number;
```

- *Type:* number

Relative amount.

Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_fielddata_cache_size ManagedDatabaseOpensearch#indices_fielddata_cache_size}

---

##### `indicesMemoryIndexBufferSize`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryIndexBufferSize"></a>

```typescript
public readonly indicesMemoryIndexBufferSize: number;
```

- *Type:* number

Percentage value.

Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_memory_index_buffer_size ManagedDatabaseOpensearch#indices_memory_index_buffer_size}

---

##### `indicesMemoryMaxIndexBufferSize`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMaxIndexBufferSize"></a>

```typescript
public readonly indicesMemoryMaxIndexBufferSize: number;
```

- *Type:* number

Absolute value.

Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_memory_max_index_buffer_size ManagedDatabaseOpensearch#indices_memory_max_index_buffer_size}

---

##### `indicesMemoryMinIndexBufferSize`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMinIndexBufferSize"></a>

```typescript
public readonly indicesMemoryMinIndexBufferSize: number;
```

- *Type:* number

Absolute value.

Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_memory_min_index_buffer_size ManagedDatabaseOpensearch#indices_memory_min_index_buffer_size}

---

##### `indicesQueriesCacheSize`<sup>Optional</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueriesCacheSize"></a>

```typescript
public readonly indicesQueriesCacheSize: number;
```

- *Type:* number

Percentage value.

Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_queries_cache_size ManagedDatabaseOpensearch#indices_queries_cache_size}

---

##### `indicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueryBoolMaxClauseCount"></a>

```typescript
public readonly indicesQueryBoolMaxClauseCount: number;
```

- *Type:* number

Maximum number of clauses Lucene BooleanQuery can have.

The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_query_bool_max_clause_count ManagedDatabaseOpensearch#indices_query_bool_max_clause_count}

---

##### `indicesRecoveryMaxBytesPerSec`<sup>Optional</sup> <a name="indicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxBytesPerSec"></a>

```typescript
public readonly indicesRecoveryMaxBytesPerSec: number;
```

- *Type:* number

Limits total inbound and outbound recovery traffic for each node.

Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_recovery_max_bytes_per_sec ManagedDatabaseOpensearch#indices_recovery_max_bytes_per_sec}

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```typescript
public readonly indicesRecoveryMaxConcurrentFileChunks: number;
```

- *Type:* number

Number of file chunks sent in parallel for each recovery. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#indices_recovery_max_concurrent_file_chunks ManagedDatabaseOpensearch#indices_recovery_max_concurrent_file_chunks}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter"></a>

```typescript
public readonly ipFilter: string[];
```

- *Type:* string[]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}

---

##### `ismEnabled`<sup>Optional</sup> <a name="ismEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismEnabled"></a>

```typescript
public readonly ismEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether ISM is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ism_enabled ManagedDatabaseOpensearch#ism_enabled}

---

##### `ismHistoryEnabled`<sup>Optional</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryEnabled"></a>

```typescript
public readonly ismHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ism_history_enabled ManagedDatabaseOpensearch#ism_history_enabled}

---

##### `ismHistoryMaxAge`<sup>Optional</sup> <a name="ismHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxAge"></a>

```typescript
public readonly ismHistoryMaxAge: number;
```

- *Type:* number

The maximum age before rolling over the audit history index in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ism_history_max_age ManagedDatabaseOpensearch#ism_history_max_age}

---

##### `ismHistoryMaxDocs`<sup>Optional</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxDocs"></a>

```typescript
public readonly ismHistoryMaxDocs: number;
```

- *Type:* number

The maximum number of documents before rolling over the audit history index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ism_history_max_docs ManagedDatabaseOpensearch#ism_history_max_docs}

---

##### `ismHistoryRolloverCheckPeriod`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverCheckPeriod"></a>

```typescript
public readonly ismHistoryRolloverCheckPeriod: number;
```

- *Type:* number

The time between rollover checks for the audit history index in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ism_history_rollover_check_period ManagedDatabaseOpensearch#ism_history_rollover_check_period}

---

##### `ismHistoryRolloverRetentionPeriod`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverRetentionPeriod"></a>

```typescript
public readonly ismHistoryRolloverRetentionPeriod: number;
```

- *Type:* number

How long audit history indices are kept in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ism_history_rollover_retention_period ManagedDatabaseOpensearch#ism_history_rollover_retention_period}

---

##### `keepIndexRefreshInterval`<sup>Optional</sup> <a name="keepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.keepIndexRefreshInterval"></a>

```typescript
public readonly keepIndexRefreshInterval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#keep_index_refresh_interval ManagedDatabaseOpensearch#keep_index_refresh_interval}

---

##### `knnMemoryCircuitBreakerEnabled`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerEnabled"></a>

```typescript
public readonly knnMemoryCircuitBreakerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable KNN memory circuit breaker. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_enabled ManagedDatabaseOpensearch#knn_memory_circuit_breaker_enabled}

---

##### `knnMemoryCircuitBreakerLimit`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerLimit"></a>

```typescript
public readonly knnMemoryCircuitBreakerLimit: number;
```

- *Type:* number

Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_limit ManagedDatabaseOpensearch#knn_memory_circuit_breaker_limit}

---

##### `openid`<sup>Optional</sup> <a name="openid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.openid"></a>

```typescript
public readonly openid: ManagedDatabaseOpensearchPropertiesOpenid;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

openid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#openid ManagedDatabaseOpensearch#openid}

---

##### `opensearchDashboards`<sup>Optional</sup> <a name="opensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.opensearchDashboards"></a>

```typescript
public readonly opensearchDashboards: ManagedDatabaseOpensearchPropertiesOpensearchDashboards;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

opensearch_dashboards block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#opensearch_dashboards ManagedDatabaseOpensearch#opensearch_dashboards}

---

##### `overrideMainResponseVersion`<sup>Optional</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.overrideMainResponseVersion"></a>

```typescript
public readonly overrideMainResponseVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#override_main_response_version ManagedDatabaseOpensearch#override_main_response_version}

---

##### `pluginsAlertingFilterByBackendRoles`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.pluginsAlertingFilterByBackendRoles"></a>

```typescript
public readonly pluginsAlertingFilterByBackendRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#plugins_alerting_filter_by_backend_roles ManagedDatabaseOpensearch#plugins_alerting_filter_by_backend_roles}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess"></a>

```typescript
public readonly publicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.reindexRemoteWhitelist"></a>

```typescript
public readonly reindexRemoteWhitelist: string[];
```

- *Type:* string[]

Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#reindex_remote_whitelist ManagedDatabaseOpensearch#reindex_remote_whitelist}

---

##### `s3Migration`<sup>Optional</sup> <a name="s3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.s3Migration"></a>

```typescript
public readonly s3Migration: ManagedDatabaseOpensearchPropertiesS3Migration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

s3_migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#s3_migration ManagedDatabaseOpensearch#s3_migration}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.saml"></a>

```typescript
public readonly saml: ManagedDatabaseOpensearchPropertiesSaml;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#saml ManagedDatabaseOpensearch#saml}

---

##### `scriptMaxCompilationsRate`<sup>Optional</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.scriptMaxCompilationsRate"></a>

```typescript
public readonly scriptMaxCompilationsRate: string;
```

- *Type:* string

Script max compilation rate - circuit breaker to prevent/minimize OOMs.

Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#script_max_compilations_rate ManagedDatabaseOpensearch#script_max_compilations_rate}

---

##### `searchMaxBuckets`<sup>Optional</sup> <a name="searchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchMaxBuckets"></a>

```typescript
public readonly searchMaxBuckets: number;
```

- *Type:* number

Maximum number of aggregation buckets allowed in a single response.

OpenSearch default value is used when this is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#search_max_buckets ManagedDatabaseOpensearch#search_max_buckets}

---

##### `serviceLog`<sup>Optional</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.serviceLog"></a>

```typescript
public readonly serviceLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#service_log ManagedDatabaseOpensearch#service_log}

---

##### `threadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeQueueSize"></a>

```typescript
public readonly threadPoolAnalyzeQueueSize: number;
```

- *Type:* number

analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_analyze_queue_size ManagedDatabaseOpensearch#thread_pool_analyze_queue_size}

---

##### `threadPoolAnalyzeSize`<sup>Optional</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeSize"></a>

```typescript
public readonly threadPoolAnalyzeSize: number;
```

- *Type:* number

analyze thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_analyze_size ManagedDatabaseOpensearch#thread_pool_analyze_size}

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolForceMergeSize"></a>

```typescript
public readonly threadPoolForceMergeSize: number;
```

- *Type:* number

force_merge thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_force_merge_size ManagedDatabaseOpensearch#thread_pool_force_merge_size}

---

##### `threadPoolGetQueueSize`<sup>Optional</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetQueueSize"></a>

```typescript
public readonly threadPoolGetQueueSize: number;
```

- *Type:* number

get thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_get_queue_size ManagedDatabaseOpensearch#thread_pool_get_queue_size}

---

##### `threadPoolGetSize`<sup>Optional</sup> <a name="threadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetSize"></a>

```typescript
public readonly threadPoolGetSize: number;
```

- *Type:* number

get thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_get_size ManagedDatabaseOpensearch#thread_pool_get_size}

---

##### `threadPoolSearchQueueSize`<sup>Optional</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchQueueSize"></a>

```typescript
public readonly threadPoolSearchQueueSize: number;
```

- *Type:* number

search thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_search_queue_size ManagedDatabaseOpensearch#thread_pool_search_queue_size}

---

##### `threadPoolSearchSize`<sup>Optional</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchSize"></a>

```typescript
public readonly threadPoolSearchSize: number;
```

- *Type:* number

search thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_search_size ManagedDatabaseOpensearch#thread_pool_search_size}

---

##### `threadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledQueueSize"></a>

```typescript
public readonly threadPoolSearchThrottledQueueSize: number;
```

- *Type:* number

search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_search_throttled_queue_size ManagedDatabaseOpensearch#thread_pool_search_throttled_queue_size}

---

##### `threadPoolSearchThrottledSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledSize"></a>

```typescript
public readonly threadPoolSearchThrottledSize: number;
```

- *Type:* number

search_throttled thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_search_throttled_size ManagedDatabaseOpensearch#thread_pool_search_throttled_size}

---

##### `threadPoolWriteQueueSize`<sup>Optional</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteQueueSize"></a>

```typescript
public readonly threadPoolWriteQueueSize: number;
```

- *Type:* number

write thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_write_queue_size ManagedDatabaseOpensearch#thread_pool_write_queue_size}

---

##### `threadPoolWriteSize`<sup>Optional</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteSize"></a>

```typescript
public readonly threadPoolWriteSize: number;
```

- *Type:* number

write thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#thread_pool_write_size ManagedDatabaseOpensearch#thread_pool_write_size}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

OpenSearch major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListeners <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesAuthFailureListeners: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.internalAuthenticationBackendLimiting">internalAuthenticationBackendLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | internal_authentication_backend_limiting block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.ipRateLimiting">ipRateLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | ip_rate_limiting block. |

---

##### `internalAuthenticationBackendLimiting`<sup>Optional</sup> <a name="internalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.internalAuthenticationBackendLimiting"></a>

```typescript
public readonly internalAuthenticationBackendLimiting: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

internal_authentication_backend_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#internal_authentication_backend_limiting ManagedDatabaseOpensearch#internal_authentication_backend_limiting}

---

##### `ipRateLimiting`<sup>Optional</sup> <a name="ipRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.ipRateLimiting"></a>

```typescript
public readonly ipRateLimiting: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

ip_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#ip_rate_limiting ManagedDatabaseOpensearch#ip_rate_limiting}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.allowedTries">allowedTries</a></code> | <code>number</code> | The number of login attempts allowed before login is blocked. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.authenticationBackend">authenticationBackend</a></code> | <code>string</code> | The internal backend. Enter `internal`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>number</code> | The duration of time that login remains blocked after a failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxBlockedClients">maxBlockedClients</a></code> | <code>number</code> | The maximum number of blocked IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxTrackedClients">maxTrackedClients</a></code> | <code>number</code> | The maximum number of tracked IP addresses that have failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>number</code> | The window of time in which the value for `allowed_tries` is enforced. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.type">type</a></code> | <code>string</code> | The type of rate limiting. |

---

##### `allowedTries`<sup>Optional</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.allowedTries"></a>

```typescript
public readonly allowedTries: number;
```

- *Type:* number

The number of login attempts allowed before login is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}

---

##### `authenticationBackend`<sup>Optional</sup> <a name="authenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.authenticationBackend"></a>

```typescript
public readonly authenticationBackend: string;
```

- *Type:* string

The internal backend. Enter `internal`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#authentication_backend ManagedDatabaseOpensearch#authentication_backend}

---

##### `blockExpirySeconds`<sup>Optional</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.blockExpirySeconds"></a>

```typescript
public readonly blockExpirySeconds: number;
```

- *Type:* number

The duration of time that login remains blocked after a failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}

---

##### `maxBlockedClients`<sup>Optional</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxBlockedClients"></a>

```typescript
public readonly maxBlockedClients: number;
```

- *Type:* number

The maximum number of blocked IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}

---

##### `maxTrackedClients`<sup>Optional</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxTrackedClients"></a>

```typescript
public readonly maxTrackedClients: number;
```

- *Type:* number

The maximum number of tracked IP addresses that have failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}

---

##### `timeWindowSeconds`<sup>Optional</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.timeWindowSeconds"></a>

```typescript
public readonly timeWindowSeconds: number;
```

- *Type:* number

The window of time in which the value for `allowed_tries` is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.allowedTries">allowedTries</a></code> | <code>number</code> | The number of login attempts allowed before login is blocked. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>number</code> | The duration of time that login remains blocked after a failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxBlockedClients">maxBlockedClients</a></code> | <code>number</code> | The maximum number of blocked IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxTrackedClients">maxTrackedClients</a></code> | <code>number</code> | The maximum number of tracked IP addresses that have failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>number</code> | The window of time in which the value for `allowed_tries` is enforced. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.type">type</a></code> | <code>string</code> | The type of rate limiting. |

---

##### `allowedTries`<sup>Optional</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.allowedTries"></a>

```typescript
public readonly allowedTries: number;
```

- *Type:* number

The number of login attempts allowed before login is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}

---

##### `blockExpirySeconds`<sup>Optional</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.blockExpirySeconds"></a>

```typescript
public readonly blockExpirySeconds: number;
```

- *Type:* number

The duration of time that login remains blocked after a failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}

---

##### `maxBlockedClients`<sup>Optional</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxBlockedClients"></a>

```typescript
public readonly maxBlockedClients: number;
```

- *Type:* number

The maximum number of blocked IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}

---

##### `maxTrackedClients`<sup>Optional</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxTrackedClients"></a>

```typescript
public readonly maxTrackedClients: number;
```

- *Type:* number

The maximum number of tracked IP addresses that have failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}

---

##### `timeWindowSeconds`<sup>Optional</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.timeWindowSeconds"></a>

```typescript
public readonly timeWindowSeconds: number;
```

- *Type:* number

The window of time in which the value for `allowed_tries` is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

### ManagedDatabaseOpensearchPropertiesAzureMigration <a name="ManagedDatabaseOpensearchPropertiesAzureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesAzureMigration: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.account">account</a></code> | <code>string</code> | Account name. Azure account name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.basePath">basePath</a></code> | <code>string</code> | The path to the repository data within its container. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.chunkSize">chunkSize</a></code> | <code>string</code> | Chunk size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.container">container</a></code> | <code>string</code> | Azure container name. Azure container name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.endpointSuffix">endpointSuffix</a></code> | <code>string</code> | Endpoint suffix. Defines the DNS suffix for Azure Storage endpoints. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.key">key</a></code> | <code>string</code> | Account secret key. Azure account secret key. One of key or sas_token should be specified. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.sasToken">sasToken</a></code> | <code>string</code> | SAS token. A shared access signatures (SAS) token. One of key or sas_token should be specified. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.snapshotName">snapshotName</a></code> | <code>string</code> | The snapshot name to restore from. The snapshot name to restore from. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Account name. Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#account ManagedDatabaseOpensearch#account}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The path to the repository data within its container.

The path to the repository data within its container. The value of this setting should not start or end with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#base_path ManagedDatabaseOpensearch#base_path}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.chunkSize"></a>

```typescript
public readonly chunkSize: string;
```

- *Type:* string

Chunk size.

Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#chunk_size ManagedDatabaseOpensearch#chunk_size}

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#compress ManagedDatabaseOpensearch#compress}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Azure container name. Azure container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#container ManagedDatabaseOpensearch#container}

---

##### `endpointSuffix`<sup>Optional</sup> <a name="endpointSuffix" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.endpointSuffix"></a>

```typescript
public readonly endpointSuffix: string;
```

- *Type:* string

Endpoint suffix. Defines the DNS suffix for Azure Storage endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#endpoint_suffix ManagedDatabaseOpensearch#endpoint_suffix}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Account secret key. Azure account secret key. One of key or sas_token should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#key ManagedDatabaseOpensearch#key}

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

SAS token. A shared access signatures (SAS) token. One of key or sas_token should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#sas_token ManagedDatabaseOpensearch#sas_token}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The snapshot name to restore from. The snapshot name to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#snapshot_name ManagedDatabaseOpensearch#snapshot_name}

---

### ManagedDatabaseOpensearchPropertiesGcsMigration <a name="ManagedDatabaseOpensearchPropertiesGcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesGcsMigration: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.basePath">basePath</a></code> | <code>string</code> | The path to the repository data within its container. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.bucket">bucket</a></code> | <code>string</code> | The path to the repository data within its container. Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.chunkSize">chunkSize</a></code> | <code>string</code> | Chunk size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.credentials">credentials</a></code> | <code>string</code> | Credentials. Google Cloud Storage credentials file content. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.snapshotName">snapshotName</a></code> | <code>string</code> | The snapshot name to restore from. The snapshot name to restore from. |

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The path to the repository data within its container.

The path to the repository data within its container. The value of this setting should not start or end with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#base_path ManagedDatabaseOpensearch#base_path}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The path to the repository data within its container. Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#bucket ManagedDatabaseOpensearch#bucket}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.chunkSize"></a>

```typescript
public readonly chunkSize: string;
```

- *Type:* string

Chunk size.

Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#chunk_size ManagedDatabaseOpensearch#chunk_size}

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#compress ManagedDatabaseOpensearch#compress}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Credentials. Google Cloud Storage credentials file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#credentials ManagedDatabaseOpensearch#credentials}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The snapshot name to restore from. The snapshot name to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#snapshot_name ManagedDatabaseOpensearch#snapshot_name}

---

### ManagedDatabaseOpensearchPropertiesIndexRollup <a name="ManagedDatabaseOpensearchPropertiesIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesIndexRollup: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupDashboardsEnabled">rollupDashboardsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupEnabled">rollupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffCount">rollupSearchBackoffCount</a></code> | <code>number</code> | plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffMillis">rollupSearchBackoffMillis</a></code> | <code>number</code> | plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchSearchAllJobs">rollupSearchSearchAllJobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false. |

---

##### `rollupDashboardsEnabled`<sup>Optional</sup> <a name="rollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupDashboardsEnabled"></a>

```typescript
public readonly rollupDashboardsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#rollup_dashboards_enabled ManagedDatabaseOpensearch#rollup_dashboards_enabled}

---

##### `rollupEnabled`<sup>Optional</sup> <a name="rollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupEnabled"></a>

```typescript
public readonly rollupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#rollup_enabled ManagedDatabaseOpensearch#rollup_enabled}

---

##### `rollupSearchBackoffCount`<sup>Optional</sup> <a name="rollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffCount"></a>

```typescript
public readonly rollupSearchBackoffCount: number;
```

- *Type:* number

plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#rollup_search_backoff_count ManagedDatabaseOpensearch#rollup_search_backoff_count}

---

##### `rollupSearchBackoffMillis`<sup>Optional</sup> <a name="rollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffMillis"></a>

```typescript
public readonly rollupSearchBackoffMillis: number;
```

- *Type:* number

plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#rollup_search_backoff_millis ManagedDatabaseOpensearch#rollup_search_backoff_millis}

---

##### `rollupSearchSearchAllJobs`<sup>Optional</sup> <a name="rollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchSearchAllJobs"></a>

```typescript
public readonly rollupSearchSearchAllJobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#rollup_search_search_all_jobs ManagedDatabaseOpensearch#rollup_search_search_all_jobs}

---

### ManagedDatabaseOpensearchPropertiesIndexTemplate <a name="ManagedDatabaseOpensearchPropertiesIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesIndexTemplate: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.mappingNestedObjectsLimit">mappingNestedObjectsLimit</a></code> | <code>number</code> | index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfReplicas">numberOfReplicas</a></code> | <code>number</code> | The number of replicas each primary shard has. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfShards">numberOfShards</a></code> | <code>number</code> | The number of primary shards that an index should have. |

---

##### `mappingNestedObjectsLimit`<sup>Optional</sup> <a name="mappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.mappingNestedObjectsLimit"></a>

```typescript
public readonly mappingNestedObjectsLimit: number;
```

- *Type:* number

index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#mapping_nested_objects_limit ManagedDatabaseOpensearch#mapping_nested_objects_limit}

---

##### `numberOfReplicas`<sup>Optional</sup> <a name="numberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfReplicas"></a>

```typescript
public readonly numberOfReplicas: number;
```

- *Type:* number

The number of replicas each primary shard has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#number_of_replicas ManagedDatabaseOpensearch#number_of_replicas}

---

##### `numberOfShards`<sup>Optional</sup> <a name="numberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfShards"></a>

```typescript
public readonly numberOfShards: number;
```

- *Type:* number

The number of primary shards that an index should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#number_of_shards ManagedDatabaseOpensearch#number_of_shards}

---

### ManagedDatabaseOpensearchPropertiesOpenid <a name="ManagedDatabaseOpensearchPropertiesOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesOpenid: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientId">clientId</a></code> | <code>string</code> | The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret of the OpenID Connect. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.connectUrl">connectUrl</a></code> | <code>string</code> | OpenID Connect metadata/configuration URL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable OpenSearch OpenID Connect authentication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.header">header</a></code> | <code>string</code> | HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtHeader">jwtHeader</a></code> | <code>string</code> | The HTTP header that stores the token. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtUrlParameter">jwtUrlParameter</a></code> | <code>string</code> | URL JWT token. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitCount">refreshRateLimitCount</a></code> | <code>number</code> | The maximum number of unknown key IDs in the time frame. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitTimeWindowMs">refreshRateLimitTimeWindowMs</a></code> | <code>number</code> | The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.rolesKey">rolesKey</a></code> | <code>string</code> | The key in the JSON payload that stores the user’s roles. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.scope">scope</a></code> | <code>string</code> | The scope of the identity token issued by the IdP. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.subjectKey">subjectKey</a></code> | <code>string</code> | The key in the JSON payload that stores the user’s name. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#client_id ManagedDatabaseOpensearch#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret of the OpenID Connect.

The client secret of the OpenID Connect client configured in your IdP. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#client_secret ManagedDatabaseOpensearch#client_secret}

---

##### `connectUrl`<sup>Optional</sup> <a name="connectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.connectUrl"></a>

```typescript
public readonly connectUrl: string;
```

- *Type:* string

OpenID Connect metadata/configuration URL.

The URL of your IdP where the Security plugin can find the OpenID Connect metadata/configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#connect_url ManagedDatabaseOpensearch#connect_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable OpenSearch OpenID Connect authentication.

Enables or disables OpenID Connect authentication for OpenSearch. When enabled, users can authenticate using OpenID Connect with an Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#header ManagedDatabaseOpensearch#header}

---

##### `jwtHeader`<sup>Optional</sup> <a name="jwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtHeader"></a>

```typescript
public readonly jwtHeader: string;
```

- *Type:* string

The HTTP header that stores the token.

The HTTP header that stores the token. Typically the Authorization header with the Bearer schema: Authorization: Bearer <token>. Optional. Default is Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#jwt_header ManagedDatabaseOpensearch#jwt_header}

---

##### `jwtUrlParameter`<sup>Optional</sup> <a name="jwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtUrlParameter"></a>

```typescript
public readonly jwtUrlParameter: string;
```

- *Type:* string

URL JWT token.

If the token is not transmitted in the HTTP header, but as an URL parameter, define the name of the parameter here. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#jwt_url_parameter ManagedDatabaseOpensearch#jwt_url_parameter}

---

##### `refreshRateLimitCount`<sup>Optional</sup> <a name="refreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitCount"></a>

```typescript
public readonly refreshRateLimitCount: number;
```

- *Type:* number

The maximum number of unknown key IDs in the time frame.

The maximum number of unknown key IDs in the time frame. Default is 10. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#refresh_rate_limit_count ManagedDatabaseOpensearch#refresh_rate_limit_count}

---

##### `refreshRateLimitTimeWindowMs`<sup>Optional</sup> <a name="refreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitTimeWindowMs"></a>

```typescript
public readonly refreshRateLimitTimeWindowMs: number;
```

- *Type:* number

The time frame to use when checking the maximum number of unknown key IDs, in milliseconds.

The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. Optional.Default is 10000 (10 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#refresh_rate_limit_time_window_ms ManagedDatabaseOpensearch#refresh_rate_limit_time_window_ms}

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.rolesKey"></a>

```typescript
public readonly rolesKey: string;
```

- *Type:* string

The key in the JSON payload that stores the user’s roles.

The key in the JSON payload that stores the user’s roles. The value of this key must be a comma-separated list of roles. Required only if you want to use roles in the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the identity token issued by the IdP.

The scope of the identity token issued by the IdP. Optional. Default is openid profile email address phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#scope ManagedDatabaseOpensearch#scope}

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.subjectKey"></a>

```typescript
public readonly subjectKey: string;
```

- *Type:* string

The key in the JSON payload that stores the user’s name.

The key in the JSON payload that stores the user’s name. If not defined, the subject registered claim is used. Most IdP providers use the preferred_username claim. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}

---

### ManagedDatabaseOpensearchPropertiesOpensearchDashboards <a name="ManagedDatabaseOpensearchPropertiesOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesOpensearchDashboards: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable OpenSearch Dashboards. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.maxOldSpaceSize">maxOldSpaceSize</a></code> | <code>number</code> | Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.opensearchRequestTimeout">opensearchRequestTimeout</a></code> | <code>number</code> | Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable OpenSearch Dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `maxOldSpaceSize`<sup>Optional</sup> <a name="maxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.maxOldSpaceSize"></a>

```typescript
public readonly maxOldSpaceSize: number;
```

- *Type:* number

Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use.

This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#max_old_space_size ManagedDatabaseOpensearch#max_old_space_size}

---

##### `opensearchRequestTimeout`<sup>Optional</sup> <a name="opensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.opensearchRequestTimeout"></a>

```typescript
public readonly opensearchRequestTimeout: number;
```

- *Type:* number

Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#opensearch_request_timeout ManagedDatabaseOpensearch#opensearch_request_timeout}

---

### ManagedDatabaseOpensearchPropertiesS3Migration <a name="ManagedDatabaseOpensearchPropertiesS3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesS3Migration: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.accessKey">accessKey</a></code> | <code>string</code> | AWS Access key. AWS Access key. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.basePath">basePath</a></code> | <code>string</code> | The path to the repository data within its container. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.bucket">bucket</a></code> | <code>string</code> | S3 bucket name. S3 bucket name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.chunkSize">chunkSize</a></code> | <code>string</code> | Chunk size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.endpoint">endpoint</a></code> | <code>string</code> | The S3 service endpoint to connect. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.region">region</a></code> | <code>string</code> | S3 region. S3 region. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.secretKey">secretKey</a></code> | <code>string</code> | AWS secret key. AWS secret key. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.serverSideEncryption">serverSideEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Server side encryption. When set to true files are encrypted on server side. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.snapshotName">snapshotName</a></code> | <code>string</code> | The snapshot name to restore from. The snapshot name to restore from. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

AWS Access key. AWS Access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#access_key ManagedDatabaseOpensearch#access_key}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

The path to the repository data within its container.

The path to the repository data within its container. The value of this setting should not start or end with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#base_path ManagedDatabaseOpensearch#base_path}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

S3 bucket name. S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#bucket ManagedDatabaseOpensearch#bucket}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.chunkSize"></a>

```typescript
public readonly chunkSize: string;
```

- *Type:* string

Chunk size.

Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#chunk_size ManagedDatabaseOpensearch#chunk_size}

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#compress ManagedDatabaseOpensearch#compress}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The S3 service endpoint to connect.

The S3 service endpoint to connect to. If you are using an S3-compatible service then you should set this to the service’s endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#endpoint ManagedDatabaseOpensearch#endpoint}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

S3 region. S3 region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#region ManagedDatabaseOpensearch#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

AWS secret key. AWS secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#secret_key ManagedDatabaseOpensearch#secret_key}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Server side encryption. When set to true files are encrypted on server side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#server_side_encryption ManagedDatabaseOpensearch#server_side_encryption}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The snapshot name to restore from. The snapshot name to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#snapshot_name ManagedDatabaseOpensearch#snapshot_name}

---

### ManagedDatabaseOpensearchPropertiesSaml <a name="ManagedDatabaseOpensearchPropertiesSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

const managedDatabaseOpensearchPropertiesSaml: managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable OpenSearch SAML authentication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | Identity Provider Entity ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | Identity Provider (IdP) SAML metadata URL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpPemtrustedcasContent">idpPemtrustedcasContent</a></code> | <code>string</code> | PEM-encoded root CA Content for SAML IdP server verification. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.rolesKey">rolesKey</a></code> | <code>string</code> | SAML response role attribute. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.spEntityId">spEntityId</a></code> | <code>string</code> | Service Provider Entity ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.subjectKey">subjectKey</a></code> | <code>string</code> | SAML response subject attribute. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable OpenSearch SAML authentication.

Enables or disables SAML-based authentication for OpenSearch. When enabled, users can authenticate using SAML with an Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `idpEntityId`<sup>Optional</sup> <a name="idpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

Identity Provider Entity ID.

The unique identifier for the Identity Provider (IdP) entity that is used for SAML authentication. This value is typically provided by the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#idp_entity_id ManagedDatabaseOpensearch#idp_entity_id}

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

Identity Provider (IdP) SAML metadata URL.

The URL of the SAML metadata for the Identity Provider (IdP). This is used to configure SAML-based authentication with the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#idp_metadata_url ManagedDatabaseOpensearch#idp_metadata_url}

---

##### `idpPemtrustedcasContent`<sup>Optional</sup> <a name="idpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpPemtrustedcasContent"></a>

```typescript
public readonly idpPemtrustedcasContent: string;
```

- *Type:* string

PEM-encoded root CA Content for SAML IdP server verification.

This parameter specifies the PEM-encoded root certificate authority (CA) content for the SAML identity provider (IdP) server verification. The root CA content is used to verify the SSL/TLS certificate presented by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#idp_pemtrustedcas_content ManagedDatabaseOpensearch#idp_pemtrustedcas_content}

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.rolesKey"></a>

```typescript
public readonly rolesKey: string;
```

- *Type:* string

SAML response role attribute.

Optional. Specifies the attribute in the SAML response where role information is stored, if available. Role attributes are not required for SAML authentication, but can be included in SAML assertions by most Identity Providers (IdPs) to determine user access levels or permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}

---

##### `spEntityId`<sup>Optional</sup> <a name="spEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

Service Provider Entity ID.

The unique identifier for the Service Provider (SP) entity that is used for SAML authentication. This value is typically provided by the SP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#sp_entity_id ManagedDatabaseOpensearch#sp_entity_id}

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.subjectKey"></a>

```typescript
public readonly subjectKey: string;
```

- *Type:* string

SAML response subject attribute.

Optional. Specifies the attribute in the SAML response where the subject identifier is stored. If not configured, the NameID attribute is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseOpensearchComponentsList <a name="ManagedDatabaseOpensearchComponentsList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get"></a>

```typescript
public get(index: number): ManagedDatabaseOpensearchComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ManagedDatabaseOpensearchComponentsOutputReference <a name="ManagedDatabaseOpensearchComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route">route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage">usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchComponents;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a>

---


### ManagedDatabaseOpensearchNetworkList <a name="ManagedDatabaseOpensearchNetworkList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get"></a>

```typescript
public get(index: number): ManagedDatabaseOpensearchNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDatabaseOpensearchNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>[]

---


### ManagedDatabaseOpensearchNetworkOutputReference <a name="ManagedDatabaseOpensearchNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDatabaseOpensearchNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>

---


### ManagedDatabaseOpensearchNodeStatesList <a name="ManagedDatabaseOpensearchNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get"></a>

```typescript
public get(index: number): ManagedDatabaseOpensearchNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ManagedDatabaseOpensearchNodeStatesOutputReference <a name="ManagedDatabaseOpensearchNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchNodeStates;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAllowedTries">resetAllowedTries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAuthenticationBackend">resetAuthenticationBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetBlockExpirySeconds">resetBlockExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxBlockedClients">resetMaxBlockedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxTrackedClients">resetMaxTrackedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetTimeWindowSeconds">resetTimeWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedTries` <a name="resetAllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAllowedTries"></a>

```typescript
public resetAllowedTries(): void
```

##### `resetAuthenticationBackend` <a name="resetAuthenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAuthenticationBackend"></a>

```typescript
public resetAuthenticationBackend(): void
```

##### `resetBlockExpirySeconds` <a name="resetBlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetBlockExpirySeconds"></a>

```typescript
public resetBlockExpirySeconds(): void
```

##### `resetMaxBlockedClients` <a name="resetMaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxBlockedClients"></a>

```typescript
public resetMaxBlockedClients(): void
```

##### `resetMaxTrackedClients` <a name="resetMaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxTrackedClients"></a>

```typescript
public resetMaxTrackedClients(): void
```

##### `resetTimeWindowSeconds` <a name="resetTimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetTimeWindowSeconds"></a>

```typescript
public resetTimeWindowSeconds(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTriesInput">allowedTriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackendInput">authenticationBackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySecondsInput">blockExpirySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClientsInput">maxBlockedClientsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClientsInput">maxTrackedClientsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSecondsInput">timeWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTries">allowedTries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackend">authenticationBackend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClients">maxBlockedClients</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClients">maxTrackedClients</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedTriesInput`<sup>Optional</sup> <a name="allowedTriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTriesInput"></a>

```typescript
public readonly allowedTriesInput: number;
```

- *Type:* number

---

##### `authenticationBackendInput`<sup>Optional</sup> <a name="authenticationBackendInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackendInput"></a>

```typescript
public readonly authenticationBackendInput: string;
```

- *Type:* string

---

##### `blockExpirySecondsInput`<sup>Optional</sup> <a name="blockExpirySecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySecondsInput"></a>

```typescript
public readonly blockExpirySecondsInput: number;
```

- *Type:* number

---

##### `maxBlockedClientsInput`<sup>Optional</sup> <a name="maxBlockedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClientsInput"></a>

```typescript
public readonly maxBlockedClientsInput: number;
```

- *Type:* number

---

##### `maxTrackedClientsInput`<sup>Optional</sup> <a name="maxTrackedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClientsInput"></a>

```typescript
public readonly maxTrackedClientsInput: number;
```

- *Type:* number

---

##### `timeWindowSecondsInput`<sup>Optional</sup> <a name="timeWindowSecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSecondsInput"></a>

```typescript
public readonly timeWindowSecondsInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowedTries`<sup>Required</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTries"></a>

```typescript
public readonly allowedTries: number;
```

- *Type:* number

---

##### `authenticationBackend`<sup>Required</sup> <a name="authenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackend"></a>

```typescript
public readonly authenticationBackend: string;
```

- *Type:* string

---

##### `blockExpirySeconds`<sup>Required</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySeconds"></a>

```typescript
public readonly blockExpirySeconds: number;
```

- *Type:* number

---

##### `maxBlockedClients`<sup>Required</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClients"></a>

```typescript
public readonly maxBlockedClients: number;
```

- *Type:* number

---

##### `maxTrackedClients`<sup>Required</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClients"></a>

```typescript
public readonly maxTrackedClients: number;
```

- *Type:* number

---

##### `timeWindowSeconds`<sup>Required</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSeconds"></a>

```typescript
public readonly timeWindowSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetAllowedTries">resetAllowedTries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetBlockExpirySeconds">resetBlockExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxBlockedClients">resetMaxBlockedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxTrackedClients">resetMaxTrackedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetTimeWindowSeconds">resetTimeWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedTries` <a name="resetAllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetAllowedTries"></a>

```typescript
public resetAllowedTries(): void
```

##### `resetBlockExpirySeconds` <a name="resetBlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetBlockExpirySeconds"></a>

```typescript
public resetBlockExpirySeconds(): void
```

##### `resetMaxBlockedClients` <a name="resetMaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxBlockedClients"></a>

```typescript
public resetMaxBlockedClients(): void
```

##### `resetMaxTrackedClients` <a name="resetMaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxTrackedClients"></a>

```typescript
public resetMaxTrackedClients(): void
```

##### `resetTimeWindowSeconds` <a name="resetTimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetTimeWindowSeconds"></a>

```typescript
public resetTimeWindowSeconds(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTriesInput">allowedTriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySecondsInput">blockExpirySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClientsInput">maxBlockedClientsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClientsInput">maxTrackedClientsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSecondsInput">timeWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTries">allowedTries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClients">maxBlockedClients</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClients">maxTrackedClients</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedTriesInput`<sup>Optional</sup> <a name="allowedTriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTriesInput"></a>

```typescript
public readonly allowedTriesInput: number;
```

- *Type:* number

---

##### `blockExpirySecondsInput`<sup>Optional</sup> <a name="blockExpirySecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySecondsInput"></a>

```typescript
public readonly blockExpirySecondsInput: number;
```

- *Type:* number

---

##### `maxBlockedClientsInput`<sup>Optional</sup> <a name="maxBlockedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClientsInput"></a>

```typescript
public readonly maxBlockedClientsInput: number;
```

- *Type:* number

---

##### `maxTrackedClientsInput`<sup>Optional</sup> <a name="maxTrackedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClientsInput"></a>

```typescript
public readonly maxTrackedClientsInput: number;
```

- *Type:* number

---

##### `timeWindowSecondsInput`<sup>Optional</sup> <a name="timeWindowSecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSecondsInput"></a>

```typescript
public readonly timeWindowSecondsInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowedTries`<sup>Required</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTries"></a>

```typescript
public readonly allowedTries: number;
```

- *Type:* number

---

##### `blockExpirySeconds`<sup>Required</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySeconds"></a>

```typescript
public readonly blockExpirySeconds: number;
```

- *Type:* number

---

##### `maxBlockedClients`<sup>Required</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClients"></a>

```typescript
public readonly maxBlockedClients: number;
```

- *Type:* number

---

##### `maxTrackedClients`<sup>Required</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClients"></a>

```typescript
public readonly maxTrackedClients: number;
```

- *Type:* number

---

##### `timeWindowSeconds`<sup>Required</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSeconds"></a>

```typescript
public readonly timeWindowSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting">putInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting">putIpRateLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetInternalAuthenticationBackendLimiting">resetInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetIpRateLimiting">resetIpRateLimiting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalAuthenticationBackendLimiting` <a name="putInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting"></a>

```typescript
public putInternalAuthenticationBackendLimiting(value: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---

##### `putIpRateLimiting` <a name="putIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting"></a>

```typescript
public putIpRateLimiting(value: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---

##### `resetInternalAuthenticationBackendLimiting` <a name="resetInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetInternalAuthenticationBackendLimiting"></a>

```typescript
public resetInternalAuthenticationBackendLimiting(): void
```

##### `resetIpRateLimiting` <a name="resetIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetIpRateLimiting"></a>

```typescript
public resetIpRateLimiting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimiting">internalAuthenticationBackendLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimiting">ipRateLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimitingInput">internalAuthenticationBackendLimitingInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimitingInput">ipRateLimitingInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalAuthenticationBackendLimiting`<sup>Required</sup> <a name="internalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimiting"></a>

```typescript
public readonly internalAuthenticationBackendLimiting: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference</a>

---

##### `ipRateLimiting`<sup>Required</sup> <a name="ipRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimiting"></a>

```typescript
public readonly ipRateLimiting: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference</a>

---

##### `internalAuthenticationBackendLimitingInput`<sup>Optional</sup> <a name="internalAuthenticationBackendLimitingInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimitingInput"></a>

```typescript
public readonly internalAuthenticationBackendLimitingInput: ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---

##### `ipRateLimitingInput`<sup>Optional</sup> <a name="ipRateLimitingInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimitingInput"></a>

```typescript
public readonly ipRateLimitingInput: ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesAuthFailureListeners;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---


### ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetEndpointSuffix">resetEndpointSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetBasePath"></a>

```typescript
public resetBasePath(): void
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetChunkSize"></a>

```typescript
public resetChunkSize(): void
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetCompress"></a>

```typescript
public resetCompress(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetEndpointSuffix` <a name="resetEndpointSuffix" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetEndpointSuffix"></a>

```typescript
public resetEndpointSuffix(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetSasToken` <a name="resetSasToken" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSasToken"></a>

```typescript
public resetSasToken(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePathInput">basePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compressInput">compressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffixInput">endpointSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSize">chunkSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffix">endpointSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePathInput"></a>

```typescript
public readonly basePathInput: string;
```

- *Type:* string

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSizeInput"></a>

```typescript
public readonly chunkSizeInput: string;
```

- *Type:* string

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compressInput"></a>

```typescript
public readonly compressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `endpointSuffixInput`<sup>Optional</sup> <a name="endpointSuffixInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffixInput"></a>

```typescript
public readonly endpointSuffixInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasTokenInput"></a>

```typescript
public readonly sasTokenInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSize"></a>

```typescript
public readonly chunkSize: string;
```

- *Type:* string

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `endpointSuffix`<sup>Required</sup> <a name="endpointSuffix" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffix"></a>

```typescript
public readonly endpointSuffix: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesAzureMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

---


### ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBasePath"></a>

```typescript
public resetBasePath(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetChunkSize"></a>

```typescript
public resetChunkSize(): void
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCompress"></a>

```typescript
public resetCompress(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePathInput">basePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compressInput">compressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSize">chunkSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePathInput"></a>

```typescript
public readonly basePathInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSizeInput"></a>

```typescript
public readonly chunkSizeInput: string;
```

- *Type:* string

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compressInput"></a>

```typescript
public readonly compressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSize"></a>

```typescript
public readonly chunkSize: string;
```

- *Type:* string

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesGcsMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

---


### ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference <a name="ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupDashboardsEnabled">resetRollupDashboardsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupEnabled">resetRollupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffCount">resetRollupSearchBackoffCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffMillis">resetRollupSearchBackoffMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchSearchAllJobs">resetRollupSearchSearchAllJobs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRollupDashboardsEnabled` <a name="resetRollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupDashboardsEnabled"></a>

```typescript
public resetRollupDashboardsEnabled(): void
```

##### `resetRollupEnabled` <a name="resetRollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupEnabled"></a>

```typescript
public resetRollupEnabled(): void
```

##### `resetRollupSearchBackoffCount` <a name="resetRollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffCount"></a>

```typescript
public resetRollupSearchBackoffCount(): void
```

##### `resetRollupSearchBackoffMillis` <a name="resetRollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffMillis"></a>

```typescript
public resetRollupSearchBackoffMillis(): void
```

##### `resetRollupSearchSearchAllJobs` <a name="resetRollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchSearchAllJobs"></a>

```typescript
public resetRollupSearchSearchAllJobs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabledInput">rollupDashboardsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabledInput">rollupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCountInput">rollupSearchBackoffCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillisInput">rollupSearchBackoffMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobsInput">rollupSearchSearchAllJobsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabled">rollupDashboardsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabled">rollupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCount">rollupSearchBackoffCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillis">rollupSearchBackoffMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobs">rollupSearchSearchAllJobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rollupDashboardsEnabledInput`<sup>Optional</sup> <a name="rollupDashboardsEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabledInput"></a>

```typescript
public readonly rollupDashboardsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollupEnabledInput`<sup>Optional</sup> <a name="rollupEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabledInput"></a>

```typescript
public readonly rollupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollupSearchBackoffCountInput`<sup>Optional</sup> <a name="rollupSearchBackoffCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCountInput"></a>

```typescript
public readonly rollupSearchBackoffCountInput: number;
```

- *Type:* number

---

##### `rollupSearchBackoffMillisInput`<sup>Optional</sup> <a name="rollupSearchBackoffMillisInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillisInput"></a>

```typescript
public readonly rollupSearchBackoffMillisInput: number;
```

- *Type:* number

---

##### `rollupSearchSearchAllJobsInput`<sup>Optional</sup> <a name="rollupSearchSearchAllJobsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobsInput"></a>

```typescript
public readonly rollupSearchSearchAllJobsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollupDashboardsEnabled`<sup>Required</sup> <a name="rollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabled"></a>

```typescript
public readonly rollupDashboardsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollupEnabled`<sup>Required</sup> <a name="rollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabled"></a>

```typescript
public readonly rollupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollupSearchBackoffCount`<sup>Required</sup> <a name="rollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCount"></a>

```typescript
public readonly rollupSearchBackoffCount: number;
```

- *Type:* number

---

##### `rollupSearchBackoffMillis`<sup>Required</sup> <a name="rollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillis"></a>

```typescript
public readonly rollupSearchBackoffMillis: number;
```

- *Type:* number

---

##### `rollupSearchSearchAllJobs`<sup>Required</sup> <a name="rollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobs"></a>

```typescript
public readonly rollupSearchSearchAllJobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesIndexRollup;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---


### ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference <a name="ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetMappingNestedObjectsLimit">resetMappingNestedObjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfReplicas">resetNumberOfReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfShards">resetNumberOfShards</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMappingNestedObjectsLimit` <a name="resetMappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetMappingNestedObjectsLimit"></a>

```typescript
public resetMappingNestedObjectsLimit(): void
```

##### `resetNumberOfReplicas` <a name="resetNumberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfReplicas"></a>

```typescript
public resetNumberOfReplicas(): void
```

##### `resetNumberOfShards` <a name="resetNumberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfShards"></a>

```typescript
public resetNumberOfShards(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimitInput">mappingNestedObjectsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicasInput">numberOfReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShardsInput">numberOfShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimit">mappingNestedObjectsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicas">numberOfReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShards">numberOfShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingNestedObjectsLimitInput`<sup>Optional</sup> <a name="mappingNestedObjectsLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimitInput"></a>

```typescript
public readonly mappingNestedObjectsLimitInput: number;
```

- *Type:* number

---

##### `numberOfReplicasInput`<sup>Optional</sup> <a name="numberOfReplicasInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicasInput"></a>

```typescript
public readonly numberOfReplicasInput: number;
```

- *Type:* number

---

##### `numberOfShardsInput`<sup>Optional</sup> <a name="numberOfShardsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShardsInput"></a>

```typescript
public readonly numberOfShardsInput: number;
```

- *Type:* number

---

##### `mappingNestedObjectsLimit`<sup>Required</sup> <a name="mappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimit"></a>

```typescript
public readonly mappingNestedObjectsLimit: number;
```

- *Type:* number

---

##### `numberOfReplicas`<sup>Required</sup> <a name="numberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicas"></a>

```typescript
public readonly numberOfReplicas: number;
```

- *Type:* number

---

##### `numberOfShards`<sup>Required</sup> <a name="numberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShards"></a>

```typescript
public readonly numberOfShards: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesIndexTemplate;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---


### ManagedDatabaseOpensearchPropertiesOpenidOutputReference <a name="ManagedDatabaseOpensearchPropertiesOpenidOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetConnectUrl">resetConnectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtHeader">resetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtUrlParameter">resetJwtUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitCount">resetRefreshRateLimitCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitTimeWindowMs">resetRefreshRateLimitTimeWindowMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetConnectUrl` <a name="resetConnectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetConnectUrl"></a>

```typescript
public resetConnectUrl(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetJwtHeader` <a name="resetJwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtHeader"></a>

```typescript
public resetJwtHeader(): void
```

##### `resetJwtUrlParameter` <a name="resetJwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtUrlParameter"></a>

```typescript
public resetJwtUrlParameter(): void
```

##### `resetRefreshRateLimitCount` <a name="resetRefreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitCount"></a>

```typescript
public resetRefreshRateLimitCount(): void
```

##### `resetRefreshRateLimitTimeWindowMs` <a name="resetRefreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitTimeWindowMs"></a>

```typescript
public resetRefreshRateLimitTimeWindowMs(): void
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRolesKey"></a>

```typescript
public resetRolesKey(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetSubjectKey"></a>

```typescript
public resetSubjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrlInput">connectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeaderInput">jwtHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameterInput">jwtUrlParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCountInput">refreshRateLimitCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMsInput">refreshRateLimitTimeWindowMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrl">connectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeader">jwtHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameter">jwtUrlParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCount">refreshRateLimitCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMs">refreshRateLimitTimeWindowMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKey">rolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKey">subjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `connectUrlInput`<sup>Optional</sup> <a name="connectUrlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrlInput"></a>

```typescript
public readonly connectUrlInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `jwtHeaderInput`<sup>Optional</sup> <a name="jwtHeaderInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeaderInput"></a>

```typescript
public readonly jwtHeaderInput: string;
```

- *Type:* string

---

##### `jwtUrlParameterInput`<sup>Optional</sup> <a name="jwtUrlParameterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameterInput"></a>

```typescript
public readonly jwtUrlParameterInput: string;
```

- *Type:* string

---

##### `refreshRateLimitCountInput`<sup>Optional</sup> <a name="refreshRateLimitCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCountInput"></a>

```typescript
public readonly refreshRateLimitCountInput: number;
```

- *Type:* number

---

##### `refreshRateLimitTimeWindowMsInput`<sup>Optional</sup> <a name="refreshRateLimitTimeWindowMsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMsInput"></a>

```typescript
public readonly refreshRateLimitTimeWindowMsInput: number;
```

- *Type:* number

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKeyInput"></a>

```typescript
public readonly rolesKeyInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKeyInput"></a>

```typescript
public readonly subjectKeyInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `connectUrl`<sup>Required</sup> <a name="connectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrl"></a>

```typescript
public readonly connectUrl: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `jwtHeader`<sup>Required</sup> <a name="jwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeader"></a>

```typescript
public readonly jwtHeader: string;
```

- *Type:* string

---

##### `jwtUrlParameter`<sup>Required</sup> <a name="jwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameter"></a>

```typescript
public readonly jwtUrlParameter: string;
```

- *Type:* string

---

##### `refreshRateLimitCount`<sup>Required</sup> <a name="refreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCount"></a>

```typescript
public readonly refreshRateLimitCount: number;
```

- *Type:* number

---

##### `refreshRateLimitTimeWindowMs`<sup>Required</sup> <a name="refreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMs"></a>

```typescript
public readonly refreshRateLimitTimeWindowMs: number;
```

- *Type:* number

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKey"></a>

```typescript
public readonly rolesKey: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKey"></a>

```typescript
public readonly subjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesOpenid;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---


### ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference <a name="ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMaxOldSpaceSize">resetMaxOldSpaceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetOpensearchRequestTimeout">resetOpensearchRequestTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMaxOldSpaceSize` <a name="resetMaxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMaxOldSpaceSize"></a>

```typescript
public resetMaxOldSpaceSize(): void
```

##### `resetOpensearchRequestTimeout` <a name="resetOpensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetOpensearchRequestTimeout"></a>

```typescript
public resetOpensearchRequestTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSizeInput">maxOldSpaceSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeoutInput">opensearchRequestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSize">maxOldSpaceSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeout">opensearchRequestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxOldSpaceSizeInput`<sup>Optional</sup> <a name="maxOldSpaceSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSizeInput"></a>

```typescript
public readonly maxOldSpaceSizeInput: number;
```

- *Type:* number

---

##### `opensearchRequestTimeoutInput`<sup>Optional</sup> <a name="opensearchRequestTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeoutInput"></a>

```typescript
public readonly opensearchRequestTimeoutInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxOldSpaceSize`<sup>Required</sup> <a name="maxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSize"></a>

```typescript
public readonly maxOldSpaceSize: number;
```

- *Type:* number

---

##### `opensearchRequestTimeout`<sup>Required</sup> <a name="opensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeout"></a>

```typescript
public readonly opensearchRequestTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesOpensearchDashboards;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---


### ManagedDatabaseOpensearchPropertiesOutputReference <a name="ManagedDatabaseOpensearchPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners">putAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAzureMigration">putAzureMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putGcsMigration">putGcsMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup">putIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate">putIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid">putOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards">putOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putS3Migration">putS3Migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionAutoCreateIndexEnabled">resetActionAutoCreateIndexEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionDestructiveRequiresName">resetActionDestructiveRequiresName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAuthFailureListeners">resetAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAzureMigration">resetAzureMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterMaxShardsPerNode">resetClusterMaxShardsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationNodeConcurrentRecoveries">resetClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderName">resetEmailSenderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderPassword">resetEmailSenderPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderUsername">resetEmailSenderUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableSecurityAudit">resetEnableSecurityAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetGcsMigration">resetGcsMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxContentLength">resetHttpMaxContentLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxHeaderSize">resetHttpMaxHeaderSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxInitialLineLength">resetHttpMaxInitialLineLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexPatterns">resetIndexPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexRollup">resetIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexTemplate">resetIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesFielddataCacheSize">resetIndicesFielddataCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryIndexBufferSize">resetIndicesMemoryIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMaxIndexBufferSize">resetIndicesMemoryMaxIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMinIndexBufferSize">resetIndicesMemoryMinIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueriesCacheSize">resetIndicesQueriesCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueryBoolMaxClauseCount">resetIndicesQueryBoolMaxClauseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxBytesPerSec">resetIndicesRecoveryMaxBytesPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxConcurrentFileChunks">resetIndicesRecoveryMaxConcurrentFileChunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmEnabled">resetIsmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryEnabled">resetIsmHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxAge">resetIsmHistoryMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxDocs">resetIsmHistoryMaxDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverCheckPeriod">resetIsmHistoryRolloverCheckPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverRetentionPeriod">resetIsmHistoryRolloverRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKeepIndexRefreshInterval">resetKeepIndexRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerEnabled">resetKnnMemoryCircuitBreakerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerLimit">resetKnnMemoryCircuitBreakerLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpenid">resetOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpensearchDashboards">resetOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOverrideMainResponseVersion">resetOverrideMainResponseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPluginsAlertingFilterByBackendRoles">resetPluginsAlertingFilterByBackendRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetReindexRemoteWhitelist">resetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetS3Migration">resetS3Migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetScriptMaxCompilationsRate">resetScriptMaxCompilationsRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchMaxBuckets">resetSearchMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetServiceLog">resetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeQueueSize">resetThreadPoolAnalyzeQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeSize">resetThreadPoolAnalyzeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolForceMergeSize">resetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetQueueSize">resetThreadPoolGetQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetSize">resetThreadPoolGetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchQueueSize">resetThreadPoolSearchQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchSize">resetThreadPoolSearchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledQueueSize">resetThreadPoolSearchThrottledQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledSize">resetThreadPoolSearchThrottledSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteQueueSize">resetThreadPoolWriteQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteSize">resetThreadPoolWriteSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthFailureListeners` <a name="putAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners"></a>

```typescript
public putAuthFailureListeners(value: ManagedDatabaseOpensearchPropertiesAuthFailureListeners): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---

##### `putAzureMigration` <a name="putAzureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAzureMigration"></a>

```typescript
public putAzureMigration(value: ManagedDatabaseOpensearchPropertiesAzureMigration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAzureMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

---

##### `putGcsMigration` <a name="putGcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putGcsMigration"></a>

```typescript
public putGcsMigration(value: ManagedDatabaseOpensearchPropertiesGcsMigration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putGcsMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

---

##### `putIndexRollup` <a name="putIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup"></a>

```typescript
public putIndexRollup(value: ManagedDatabaseOpensearchPropertiesIndexRollup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---

##### `putIndexTemplate` <a name="putIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate"></a>

```typescript
public putIndexTemplate(value: ManagedDatabaseOpensearchPropertiesIndexTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---

##### `putOpenid` <a name="putOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid"></a>

```typescript
public putOpenid(value: ManagedDatabaseOpensearchPropertiesOpenid): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---

##### `putOpensearchDashboards` <a name="putOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards"></a>

```typescript
public putOpensearchDashboards(value: ManagedDatabaseOpensearchPropertiesOpensearchDashboards): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---

##### `putS3Migration` <a name="putS3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putS3Migration"></a>

```typescript
public putS3Migration(value: ManagedDatabaseOpensearchPropertiesS3Migration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putS3Migration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml"></a>

```typescript
public putSaml(value: ManagedDatabaseOpensearchPropertiesSaml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---

##### `resetActionAutoCreateIndexEnabled` <a name="resetActionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionAutoCreateIndexEnabled"></a>

```typescript
public resetActionAutoCreateIndexEnabled(): void
```

##### `resetActionDestructiveRequiresName` <a name="resetActionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionDestructiveRequiresName"></a>

```typescript
public resetActionDestructiveRequiresName(): void
```

##### `resetAuthFailureListeners` <a name="resetAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAuthFailureListeners"></a>

```typescript
public resetAuthFailureListeners(): void
```

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```typescript
public resetAutomaticUtilityNetworkIpFilter(): void
```

##### `resetAzureMigration` <a name="resetAzureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAzureMigration"></a>

```typescript
public resetAzureMigration(): void
```

##### `resetClusterMaxShardsPerNode` <a name="resetClusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterMaxShardsPerNode"></a>

```typescript
public resetClusterMaxShardsPerNode(): void
```

##### `resetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="resetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```typescript
public resetClusterRoutingAllocationNodeConcurrentRecoveries(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetEmailSenderName` <a name="resetEmailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderName"></a>

```typescript
public resetEmailSenderName(): void
```

##### `resetEmailSenderPassword` <a name="resetEmailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderPassword"></a>

```typescript
public resetEmailSenderPassword(): void
```

##### `resetEmailSenderUsername` <a name="resetEmailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderUsername"></a>

```typescript
public resetEmailSenderUsername(): void
```

##### `resetEnableSecurityAudit` <a name="resetEnableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableSecurityAudit"></a>

```typescript
public resetEnableSecurityAudit(): void
```

##### `resetGcsMigration` <a name="resetGcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetGcsMigration"></a>

```typescript
public resetGcsMigration(): void
```

##### `resetHttpMaxContentLength` <a name="resetHttpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxContentLength"></a>

```typescript
public resetHttpMaxContentLength(): void
```

##### `resetHttpMaxHeaderSize` <a name="resetHttpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxHeaderSize"></a>

```typescript
public resetHttpMaxHeaderSize(): void
```

##### `resetHttpMaxInitialLineLength` <a name="resetHttpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxInitialLineLength"></a>

```typescript
public resetHttpMaxInitialLineLength(): void
```

##### `resetIndexPatterns` <a name="resetIndexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexPatterns"></a>

```typescript
public resetIndexPatterns(): void
```

##### `resetIndexRollup` <a name="resetIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexRollup"></a>

```typescript
public resetIndexRollup(): void
```

##### `resetIndexTemplate` <a name="resetIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexTemplate"></a>

```typescript
public resetIndexTemplate(): void
```

##### `resetIndicesFielddataCacheSize` <a name="resetIndicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesFielddataCacheSize"></a>

```typescript
public resetIndicesFielddataCacheSize(): void
```

##### `resetIndicesMemoryIndexBufferSize` <a name="resetIndicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryIndexBufferSize"></a>

```typescript
public resetIndicesMemoryIndexBufferSize(): void
```

##### `resetIndicesMemoryMaxIndexBufferSize` <a name="resetIndicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMaxIndexBufferSize"></a>

```typescript
public resetIndicesMemoryMaxIndexBufferSize(): void
```

##### `resetIndicesMemoryMinIndexBufferSize` <a name="resetIndicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMinIndexBufferSize"></a>

```typescript
public resetIndicesMemoryMinIndexBufferSize(): void
```

##### `resetIndicesQueriesCacheSize` <a name="resetIndicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueriesCacheSize"></a>

```typescript
public resetIndicesQueriesCacheSize(): void
```

##### `resetIndicesQueryBoolMaxClauseCount` <a name="resetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueryBoolMaxClauseCount"></a>

```typescript
public resetIndicesQueryBoolMaxClauseCount(): void
```

##### `resetIndicesRecoveryMaxBytesPerSec` <a name="resetIndicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxBytesPerSec"></a>

```typescript
public resetIndicesRecoveryMaxBytesPerSec(): void
```

##### `resetIndicesRecoveryMaxConcurrentFileChunks` <a name="resetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```typescript
public resetIndicesRecoveryMaxConcurrentFileChunks(): void
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter"></a>

```typescript
public resetIpFilter(): void
```

##### `resetIsmEnabled` <a name="resetIsmEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmEnabled"></a>

```typescript
public resetIsmEnabled(): void
```

##### `resetIsmHistoryEnabled` <a name="resetIsmHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryEnabled"></a>

```typescript
public resetIsmHistoryEnabled(): void
```

##### `resetIsmHistoryMaxAge` <a name="resetIsmHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxAge"></a>

```typescript
public resetIsmHistoryMaxAge(): void
```

##### `resetIsmHistoryMaxDocs` <a name="resetIsmHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxDocs"></a>

```typescript
public resetIsmHistoryMaxDocs(): void
```

##### `resetIsmHistoryRolloverCheckPeriod` <a name="resetIsmHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverCheckPeriod"></a>

```typescript
public resetIsmHistoryRolloverCheckPeriod(): void
```

##### `resetIsmHistoryRolloverRetentionPeriod` <a name="resetIsmHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverRetentionPeriod"></a>

```typescript
public resetIsmHistoryRolloverRetentionPeriod(): void
```

##### `resetKeepIndexRefreshInterval` <a name="resetKeepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKeepIndexRefreshInterval"></a>

```typescript
public resetKeepIndexRefreshInterval(): void
```

##### `resetKnnMemoryCircuitBreakerEnabled` <a name="resetKnnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerEnabled"></a>

```typescript
public resetKnnMemoryCircuitBreakerEnabled(): void
```

##### `resetKnnMemoryCircuitBreakerLimit` <a name="resetKnnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerLimit"></a>

```typescript
public resetKnnMemoryCircuitBreakerLimit(): void
```

##### `resetOpenid` <a name="resetOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpenid"></a>

```typescript
public resetOpenid(): void
```

##### `resetOpensearchDashboards` <a name="resetOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpensearchDashboards"></a>

```typescript
public resetOpensearchDashboards(): void
```

##### `resetOverrideMainResponseVersion` <a name="resetOverrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOverrideMainResponseVersion"></a>

```typescript
public resetOverrideMainResponseVersion(): void
```

##### `resetPluginsAlertingFilterByBackendRoles` <a name="resetPluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPluginsAlertingFilterByBackendRoles"></a>

```typescript
public resetPluginsAlertingFilterByBackendRoles(): void
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess"></a>

```typescript
public resetPublicAccess(): void
```

##### `resetReindexRemoteWhitelist` <a name="resetReindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetReindexRemoteWhitelist"></a>

```typescript
public resetReindexRemoteWhitelist(): void
```

##### `resetS3Migration` <a name="resetS3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetS3Migration"></a>

```typescript
public resetS3Migration(): void
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSaml"></a>

```typescript
public resetSaml(): void
```

##### `resetScriptMaxCompilationsRate` <a name="resetScriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetScriptMaxCompilationsRate"></a>

```typescript
public resetScriptMaxCompilationsRate(): void
```

##### `resetSearchMaxBuckets` <a name="resetSearchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchMaxBuckets"></a>

```typescript
public resetSearchMaxBuckets(): void
```

##### `resetServiceLog` <a name="resetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetServiceLog"></a>

```typescript
public resetServiceLog(): void
```

##### `resetThreadPoolAnalyzeQueueSize` <a name="resetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeQueueSize"></a>

```typescript
public resetThreadPoolAnalyzeQueueSize(): void
```

##### `resetThreadPoolAnalyzeSize` <a name="resetThreadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeSize"></a>

```typescript
public resetThreadPoolAnalyzeSize(): void
```

##### `resetThreadPoolForceMergeSize` <a name="resetThreadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolForceMergeSize"></a>

```typescript
public resetThreadPoolForceMergeSize(): void
```

##### `resetThreadPoolGetQueueSize` <a name="resetThreadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetQueueSize"></a>

```typescript
public resetThreadPoolGetQueueSize(): void
```

##### `resetThreadPoolGetSize` <a name="resetThreadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetSize"></a>

```typescript
public resetThreadPoolGetSize(): void
```

##### `resetThreadPoolSearchQueueSize` <a name="resetThreadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchQueueSize"></a>

```typescript
public resetThreadPoolSearchQueueSize(): void
```

##### `resetThreadPoolSearchSize` <a name="resetThreadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchSize"></a>

```typescript
public resetThreadPoolSearchSize(): void
```

##### `resetThreadPoolSearchThrottledQueueSize` <a name="resetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledQueueSize"></a>

```typescript
public resetThreadPoolSearchThrottledQueueSize(): void
```

##### `resetThreadPoolSearchThrottledSize` <a name="resetThreadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledSize"></a>

```typescript
public resetThreadPoolSearchThrottledSize(): void
```

##### `resetThreadPoolWriteQueueSize` <a name="resetThreadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteQueueSize"></a>

```typescript
public resetThreadPoolWriteQueueSize(): void
```

##### `resetThreadPoolWriteSize` <a name="resetThreadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteSize"></a>

```typescript
public resetThreadPoolWriteSize(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListeners">authFailureListeners</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigration">azureMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference">ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigration">gcsMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference">ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollup">indexRollup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference">ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplate">indexTemplate</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference">ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openid">openid</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference">ManagedDatabaseOpensearchPropertiesOpenidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboards">opensearchDashboards</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference">ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3Migration">s3Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference">ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference">ManagedDatabaseOpensearchPropertiesSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabledInput">actionAutoCreateIndexEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresNameInput">actionDestructiveRequiresNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListenersInput">authFailureListenersInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigrationInput">azureMigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNodeInput">clusterMaxShardsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">clusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomainInput">customDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderNameInput">emailSenderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPasswordInput">emailSenderPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsernameInput">emailSenderUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAuditInput">enableSecurityAuditInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigrationInput">gcsMigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLengthInput">httpMaxContentLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSizeInput">httpMaxHeaderSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLengthInput">httpMaxInitialLineLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatternsInput">indexPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollupInput">indexRollupInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplateInput">indexTemplateInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSizeInput">indicesFielddataCacheSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSizeInput">indicesMemoryIndexBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSizeInput">indicesMemoryMaxIndexBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSizeInput">indicesMemoryMinIndexBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSizeInput">indicesQueriesCacheSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCountInput">indicesQueryBoolMaxClauseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSecInput">indicesRecoveryMaxBytesPerSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunksInput">indicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabledInput">ismEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabledInput">ismHistoryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAgeInput">ismHistoryMaxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocsInput">ismHistoryMaxDocsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriodInput">ismHistoryRolloverCheckPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriodInput">ismHistoryRolloverRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshIntervalInput">keepIndexRefreshIntervalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabledInput">knnMemoryCircuitBreakerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimitInput">knnMemoryCircuitBreakerLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openidInput">openidInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboardsInput">opensearchDashboardsInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersionInput">overrideMainResponseVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRolesInput">pluginsAlertingFilterByBackendRolesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelistInput">reindexRemoteWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3MigrationInput">s3MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRateInput">scriptMaxCompilationsRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBucketsInput">searchMaxBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLogInput">serviceLogInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSizeInput">threadPoolAnalyzeQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSizeInput">threadPoolAnalyzeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSizeInput">threadPoolForceMergeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSizeInput">threadPoolGetQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSizeInput">threadPoolGetSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSizeInput">threadPoolSearchQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSizeInput">threadPoolSearchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSizeInput">threadPoolSearchThrottledQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSizeInput">threadPoolSearchThrottledSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSizeInput">threadPoolWriteQueueSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSizeInput">threadPoolWriteSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderName">emailSenderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPassword">emailSenderPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsername">emailSenderUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLength">httpMaxContentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSize">httpMaxHeaderSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLength">httpMaxInitialLineLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatterns">indexPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSize">indicesFielddataCacheSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSize">indicesMemoryIndexBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSize">indicesMemoryMaxIndexBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSize">indicesMemoryMinIndexBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSec">indicesRecoveryMaxBytesPerSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabled">ismEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAge">ismHistoryMaxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriod">ismHistoryRolloverCheckPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriod">ismHistoryRolloverRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshInterval">keepIndexRefreshInterval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabled">knnMemoryCircuitBreakerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimit">knnMemoryCircuitBreakerLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRoles">pluginsAlertingFilterByBackendRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLog">serviceLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authFailureListeners`<sup>Required</sup> <a name="authFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListeners"></a>

```typescript
public readonly authFailureListeners: ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference</a>

---

##### `azureMigration`<sup>Required</sup> <a name="azureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigration"></a>

```typescript
public readonly azureMigration: ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference">ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference</a>

---

##### `gcsMigration`<sup>Required</sup> <a name="gcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigration"></a>

```typescript
public readonly gcsMigration: ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference">ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference</a>

---

##### `indexRollup`<sup>Required</sup> <a name="indexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollup"></a>

```typescript
public readonly indexRollup: ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference">ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference</a>

---

##### `indexTemplate`<sup>Required</sup> <a name="indexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplate"></a>

```typescript
public readonly indexTemplate: ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference">ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference</a>

---

##### `openid`<sup>Required</sup> <a name="openid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openid"></a>

```typescript
public readonly openid: ManagedDatabaseOpensearchPropertiesOpenidOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference">ManagedDatabaseOpensearchPropertiesOpenidOutputReference</a>

---

##### `opensearchDashboards`<sup>Required</sup> <a name="opensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboards"></a>

```typescript
public readonly opensearchDashboards: ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference">ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference</a>

---

##### `s3Migration`<sup>Required</sup> <a name="s3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3Migration"></a>

```typescript
public readonly s3Migration: ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference">ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.saml"></a>

```typescript
public readonly saml: ManagedDatabaseOpensearchPropertiesSamlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference">ManagedDatabaseOpensearchPropertiesSamlOutputReference</a>

---

##### `actionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabledInput"></a>

```typescript
public readonly actionAutoCreateIndexEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `actionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="actionDestructiveRequiresNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresNameInput"></a>

```typescript
public readonly actionDestructiveRequiresNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authFailureListenersInput`<sup>Optional</sup> <a name="authFailureListenersInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListenersInput"></a>

```typescript
public readonly authFailureListenersInput: ManagedDatabaseOpensearchPropertiesAuthFailureListeners;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```typescript
public readonly automaticUtilityNetworkIpFilterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureMigrationInput`<sup>Optional</sup> <a name="azureMigrationInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigrationInput"></a>

```typescript
public readonly azureMigrationInput: ManagedDatabaseOpensearchPropertiesAzureMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

---

##### `clusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="clusterMaxShardsPerNodeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNodeInput"></a>

```typescript
public readonly clusterMaxShardsPerNodeInput: number;
```

- *Type:* number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```typescript
public readonly clusterRoutingAllocationNodeConcurrentRecoveriesInput: number;
```

- *Type:* number

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: string;
```

- *Type:* string

---

##### `emailSenderNameInput`<sup>Optional</sup> <a name="emailSenderNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderNameInput"></a>

```typescript
public readonly emailSenderNameInput: string;
```

- *Type:* string

---

##### `emailSenderPasswordInput`<sup>Optional</sup> <a name="emailSenderPasswordInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPasswordInput"></a>

```typescript
public readonly emailSenderPasswordInput: string;
```

- *Type:* string

---

##### `emailSenderUsernameInput`<sup>Optional</sup> <a name="emailSenderUsernameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsernameInput"></a>

```typescript
public readonly emailSenderUsernameInput: string;
```

- *Type:* string

---

##### `enableSecurityAuditInput`<sup>Optional</sup> <a name="enableSecurityAuditInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAuditInput"></a>

```typescript
public readonly enableSecurityAuditInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcsMigrationInput`<sup>Optional</sup> <a name="gcsMigrationInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigrationInput"></a>

```typescript
public readonly gcsMigrationInput: ManagedDatabaseOpensearchPropertiesGcsMigration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

---

##### `httpMaxContentLengthInput`<sup>Optional</sup> <a name="httpMaxContentLengthInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLengthInput"></a>

```typescript
public readonly httpMaxContentLengthInput: number;
```

- *Type:* number

---

##### `httpMaxHeaderSizeInput`<sup>Optional</sup> <a name="httpMaxHeaderSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSizeInput"></a>

```typescript
public readonly httpMaxHeaderSizeInput: number;
```

- *Type:* number

---

##### `httpMaxInitialLineLengthInput`<sup>Optional</sup> <a name="httpMaxInitialLineLengthInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLengthInput"></a>

```typescript
public readonly httpMaxInitialLineLengthInput: number;
```

- *Type:* number

---

##### `indexPatternsInput`<sup>Optional</sup> <a name="indexPatternsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatternsInput"></a>

```typescript
public readonly indexPatternsInput: string[];
```

- *Type:* string[]

---

##### `indexRollupInput`<sup>Optional</sup> <a name="indexRollupInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollupInput"></a>

```typescript
public readonly indexRollupInput: ManagedDatabaseOpensearchPropertiesIndexRollup;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---

##### `indexTemplateInput`<sup>Optional</sup> <a name="indexTemplateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplateInput"></a>

```typescript
public readonly indexTemplateInput: ManagedDatabaseOpensearchPropertiesIndexTemplate;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---

##### `indicesFielddataCacheSizeInput`<sup>Optional</sup> <a name="indicesFielddataCacheSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSizeInput"></a>

```typescript
public readonly indicesFielddataCacheSizeInput: number;
```

- *Type:* number

---

##### `indicesMemoryIndexBufferSizeInput`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSizeInput"></a>

```typescript
public readonly indicesMemoryIndexBufferSizeInput: number;
```

- *Type:* number

---

##### `indicesMemoryMaxIndexBufferSizeInput`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSizeInput"></a>

```typescript
public readonly indicesMemoryMaxIndexBufferSizeInput: number;
```

- *Type:* number

---

##### `indicesMemoryMinIndexBufferSizeInput`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSizeInput"></a>

```typescript
public readonly indicesMemoryMinIndexBufferSizeInput: number;
```

- *Type:* number

---

##### `indicesQueriesCacheSizeInput`<sup>Optional</sup> <a name="indicesQueriesCacheSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSizeInput"></a>

```typescript
public readonly indicesQueriesCacheSizeInput: number;
```

- *Type:* number

---

##### `indicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCountInput"></a>

```typescript
public readonly indicesQueryBoolMaxClauseCountInput: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxBytesPerSecInput`<sup>Optional</sup> <a name="indicesRecoveryMaxBytesPerSecInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSecInput"></a>

```typescript
public readonly indicesRecoveryMaxBytesPerSecInput: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```typescript
public readonly indicesRecoveryMaxConcurrentFileChunksInput: number;
```

- *Type:* number

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput"></a>

```typescript
public readonly ipFilterInput: string[];
```

- *Type:* string[]

---

##### `ismEnabledInput`<sup>Optional</sup> <a name="ismEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabledInput"></a>

```typescript
public readonly ismEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryEnabledInput`<sup>Optional</sup> <a name="ismHistoryEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabledInput"></a>

```typescript
public readonly ismHistoryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryMaxAgeInput`<sup>Optional</sup> <a name="ismHistoryMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAgeInput"></a>

```typescript
public readonly ismHistoryMaxAgeInput: number;
```

- *Type:* number

---

##### `ismHistoryMaxDocsInput`<sup>Optional</sup> <a name="ismHistoryMaxDocsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocsInput"></a>

```typescript
public readonly ismHistoryMaxDocsInput: number;
```

- *Type:* number

---

##### `ismHistoryRolloverCheckPeriodInput`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriodInput"></a>

```typescript
public readonly ismHistoryRolloverCheckPeriodInput: number;
```

- *Type:* number

---

##### `ismHistoryRolloverRetentionPeriodInput`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriodInput"></a>

```typescript
public readonly ismHistoryRolloverRetentionPeriodInput: number;
```

- *Type:* number

---

##### `keepIndexRefreshIntervalInput`<sup>Optional</sup> <a name="keepIndexRefreshIntervalInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshIntervalInput"></a>

```typescript
public readonly keepIndexRefreshIntervalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerEnabledInput`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabledInput"></a>

```typescript
public readonly knnMemoryCircuitBreakerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerLimitInput`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimitInput"></a>

```typescript
public readonly knnMemoryCircuitBreakerLimitInput: number;
```

- *Type:* number

---

##### `openidInput`<sup>Optional</sup> <a name="openidInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openidInput"></a>

```typescript
public readonly openidInput: ManagedDatabaseOpensearchPropertiesOpenid;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---

##### `opensearchDashboardsInput`<sup>Optional</sup> <a name="opensearchDashboardsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboardsInput"></a>

```typescript
public readonly opensearchDashboardsInput: ManagedDatabaseOpensearchPropertiesOpensearchDashboards;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---

##### `overrideMainResponseVersionInput`<sup>Optional</sup> <a name="overrideMainResponseVersionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersionInput"></a>

```typescript
public readonly overrideMainResponseVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRolesInput`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRolesInput"></a>

```typescript
public readonly pluginsAlertingFilterByBackendRolesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput"></a>

```typescript
public readonly publicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reindexRemoteWhitelistInput`<sup>Optional</sup> <a name="reindexRemoteWhitelistInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelistInput"></a>

```typescript
public readonly reindexRemoteWhitelistInput: string[];
```

- *Type:* string[]

---

##### `s3MigrationInput`<sup>Optional</sup> <a name="s3MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3MigrationInput"></a>

```typescript
public readonly s3MigrationInput: ManagedDatabaseOpensearchPropertiesS3Migration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.samlInput"></a>

```typescript
public readonly samlInput: ManagedDatabaseOpensearchPropertiesSaml;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---

##### `scriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="scriptMaxCompilationsRateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRateInput"></a>

```typescript
public readonly scriptMaxCompilationsRateInput: string;
```

- *Type:* string

---

##### `searchMaxBucketsInput`<sup>Optional</sup> <a name="searchMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBucketsInput"></a>

```typescript
public readonly searchMaxBucketsInput: number;
```

- *Type:* number

---

##### `serviceLogInput`<sup>Optional</sup> <a name="serviceLogInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLogInput"></a>

```typescript
public readonly serviceLogInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSizeInput"></a>

```typescript
public readonly threadPoolAnalyzeQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSizeInput"></a>

```typescript
public readonly threadPoolAnalyzeSizeInput: number;
```

- *Type:* number

---

##### `threadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="threadPoolForceMergeSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSizeInput"></a>

```typescript
public readonly threadPoolForceMergeSizeInput: number;
```

- *Type:* number

---

##### `threadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="threadPoolGetQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSizeInput"></a>

```typescript
public readonly threadPoolGetQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolGetSizeInput`<sup>Optional</sup> <a name="threadPoolGetSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSizeInput"></a>

```typescript
public readonly threadPoolGetSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSizeInput"></a>

```typescript
public readonly threadPoolSearchQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchSizeInput`<sup>Optional</sup> <a name="threadPoolSearchSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSizeInput"></a>

```typescript
public readonly threadPoolSearchSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSizeInput"></a>

```typescript
public readonly threadPoolSearchThrottledQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSizeInput"></a>

```typescript
public readonly threadPoolSearchThrottledSizeInput: number;
```

- *Type:* number

---

##### `threadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="threadPoolWriteQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSizeInput"></a>

```typescript
public readonly threadPoolWriteQueueSizeInput: number;
```

- *Type:* number

---

##### `threadPoolWriteSizeInput`<sup>Optional</sup> <a name="threadPoolWriteSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSizeInput"></a>

```typescript
public readonly threadPoolWriteSizeInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `actionAutoCreateIndexEnabled`<sup>Required</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabled"></a>

```typescript
public readonly actionAutoCreateIndexEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `actionDestructiveRequiresName`<sup>Required</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresName"></a>

```typescript
public readonly actionDestructiveRequiresName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```typescript
public readonly automaticUtilityNetworkIpFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterMaxShardsPerNode`<sup>Required</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNode"></a>

```typescript
public readonly clusterMaxShardsPerNode: number;
```

- *Type:* number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```typescript
public readonly clusterRoutingAllocationNodeConcurrentRecoveries: number;
```

- *Type:* number

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `emailSenderName`<sup>Required</sup> <a name="emailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderName"></a>

```typescript
public readonly emailSenderName: string;
```

- *Type:* string

---

##### `emailSenderPassword`<sup>Required</sup> <a name="emailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPassword"></a>

```typescript
public readonly emailSenderPassword: string;
```

- *Type:* string

---

##### `emailSenderUsername`<sup>Required</sup> <a name="emailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsername"></a>

```typescript
public readonly emailSenderUsername: string;
```

- *Type:* string

---

##### `enableSecurityAudit`<sup>Required</sup> <a name="enableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAudit"></a>

```typescript
public readonly enableSecurityAudit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpMaxContentLength`<sup>Required</sup> <a name="httpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLength"></a>

```typescript
public readonly httpMaxContentLength: number;
```

- *Type:* number

---

##### `httpMaxHeaderSize`<sup>Required</sup> <a name="httpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSize"></a>

```typescript
public readonly httpMaxHeaderSize: number;
```

- *Type:* number

---

##### `httpMaxInitialLineLength`<sup>Required</sup> <a name="httpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLength"></a>

```typescript
public readonly httpMaxInitialLineLength: number;
```

- *Type:* number

---

##### `indexPatterns`<sup>Required</sup> <a name="indexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatterns"></a>

```typescript
public readonly indexPatterns: string[];
```

- *Type:* string[]

---

##### `indicesFielddataCacheSize`<sup>Required</sup> <a name="indicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSize"></a>

```typescript
public readonly indicesFielddataCacheSize: number;
```

- *Type:* number

---

##### `indicesMemoryIndexBufferSize`<sup>Required</sup> <a name="indicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSize"></a>

```typescript
public readonly indicesMemoryIndexBufferSize: number;
```

- *Type:* number

---

##### `indicesMemoryMaxIndexBufferSize`<sup>Required</sup> <a name="indicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSize"></a>

```typescript
public readonly indicesMemoryMaxIndexBufferSize: number;
```

- *Type:* number

---

##### `indicesMemoryMinIndexBufferSize`<sup>Required</sup> <a name="indicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSize"></a>

```typescript
public readonly indicesMemoryMinIndexBufferSize: number;
```

- *Type:* number

---

##### `indicesQueriesCacheSize`<sup>Required</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSize"></a>

```typescript
public readonly indicesQueriesCacheSize: number;
```

- *Type:* number

---

##### `indicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCount"></a>

```typescript
public readonly indicesQueryBoolMaxClauseCount: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxBytesPerSec`<sup>Required</sup> <a name="indicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSec"></a>

```typescript
public readonly indicesRecoveryMaxBytesPerSec: number;
```

- *Type:* number

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```typescript
public readonly indicesRecoveryMaxConcurrentFileChunks: number;
```

- *Type:* number

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter"></a>

```typescript
public readonly ipFilter: string[];
```

- *Type:* string[]

---

##### `ismEnabled`<sup>Required</sup> <a name="ismEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabled"></a>

```typescript
public readonly ismEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryEnabled`<sup>Required</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabled"></a>

```typescript
public readonly ismHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ismHistoryMaxAge`<sup>Required</sup> <a name="ismHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAge"></a>

```typescript
public readonly ismHistoryMaxAge: number;
```

- *Type:* number

---

##### `ismHistoryMaxDocs`<sup>Required</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocs"></a>

```typescript
public readonly ismHistoryMaxDocs: number;
```

- *Type:* number

---

##### `ismHistoryRolloverCheckPeriod`<sup>Required</sup> <a name="ismHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriod"></a>

```typescript
public readonly ismHistoryRolloverCheckPeriod: number;
```

- *Type:* number

---

##### `ismHistoryRolloverRetentionPeriod`<sup>Required</sup> <a name="ismHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriod"></a>

```typescript
public readonly ismHistoryRolloverRetentionPeriod: number;
```

- *Type:* number

---

##### `keepIndexRefreshInterval`<sup>Required</sup> <a name="keepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshInterval"></a>

```typescript
public readonly keepIndexRefreshInterval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerEnabled`<sup>Required</sup> <a name="knnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabled"></a>

```typescript
public readonly knnMemoryCircuitBreakerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerLimit`<sup>Required</sup> <a name="knnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimit"></a>

```typescript
public readonly knnMemoryCircuitBreakerLimit: number;
```

- *Type:* number

---

##### `overrideMainResponseVersion`<sup>Required</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersion"></a>

```typescript
public readonly overrideMainResponseVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRoles`<sup>Required</sup> <a name="pluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRoles"></a>

```typescript
public readonly pluginsAlertingFilterByBackendRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess"></a>

```typescript
public readonly publicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reindexRemoteWhitelist`<sup>Required</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelist"></a>

```typescript
public readonly reindexRemoteWhitelist: string[];
```

- *Type:* string[]

---

##### `scriptMaxCompilationsRate`<sup>Required</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRate"></a>

```typescript
public readonly scriptMaxCompilationsRate: string;
```

- *Type:* string

---

##### `searchMaxBuckets`<sup>Required</sup> <a name="searchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBuckets"></a>

```typescript
public readonly searchMaxBuckets: number;
```

- *Type:* number

---

##### `serviceLog`<sup>Required</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLog"></a>

```typescript
public readonly serviceLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `threadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSize"></a>

```typescript
public readonly threadPoolAnalyzeQueueSize: number;
```

- *Type:* number

---

##### `threadPoolAnalyzeSize`<sup>Required</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSize"></a>

```typescript
public readonly threadPoolAnalyzeSize: number;
```

- *Type:* number

---

##### `threadPoolForceMergeSize`<sup>Required</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSize"></a>

```typescript
public readonly threadPoolForceMergeSize: number;
```

- *Type:* number

---

##### `threadPoolGetQueueSize`<sup>Required</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSize"></a>

```typescript
public readonly threadPoolGetQueueSize: number;
```

- *Type:* number

---

##### `threadPoolGetSize`<sup>Required</sup> <a name="threadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSize"></a>

```typescript
public readonly threadPoolGetSize: number;
```

- *Type:* number

---

##### `threadPoolSearchQueueSize`<sup>Required</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSize"></a>

```typescript
public readonly threadPoolSearchQueueSize: number;
```

- *Type:* number

---

##### `threadPoolSearchSize`<sup>Required</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSize"></a>

```typescript
public readonly threadPoolSearchSize: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSize"></a>

```typescript
public readonly threadPoolSearchThrottledQueueSize: number;
```

- *Type:* number

---

##### `threadPoolSearchThrottledSize`<sup>Required</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSize"></a>

```typescript
public readonly threadPoolSearchThrottledSize: number;
```

- *Type:* number

---

##### `threadPoolWriteQueueSize`<sup>Required</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSize"></a>

```typescript
public readonly threadPoolWriteQueueSize: number;
```

- *Type:* number

---

##### `threadPoolWriteSize`<sup>Required</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSize"></a>

```typescript
public readonly threadPoolWriteSize: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---


### ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBasePath"></a>

```typescript
public resetBasePath(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetChunkSize"></a>

```typescript
public resetChunkSize(): void
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetCompress"></a>

```typescript
public resetCompress(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePathInput">basePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compressInput">compressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSize">chunkSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compress">compress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryption">serverSideEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePathInput"></a>

```typescript
public readonly basePathInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSizeInput"></a>

```typescript
public readonly chunkSizeInput: string;
```

- *Type:* string

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compressInput"></a>

```typescript
public readonly compressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSize"></a>

```typescript
public readonly chunkSize: string;
```

- *Type:* string

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compress"></a>

```typescript
public readonly compress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesS3Migration;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

---


### ManagedDatabaseOpensearchPropertiesSamlOutputReference <a name="ManagedDatabaseOpensearchPropertiesSamlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer"></a>

```typescript
import { managedDatabaseOpensearch } from '@cdktf/provider-upcloud'

new managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpEntityId">resetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpPemtrustedcasContent">resetIdpPemtrustedcasContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSpEntityId">resetSpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIdpEntityId` <a name="resetIdpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpEntityId"></a>

```typescript
public resetIdpEntityId(): void
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpMetadataUrl"></a>

```typescript
public resetIdpMetadataUrl(): void
```

##### `resetIdpPemtrustedcasContent` <a name="resetIdpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpPemtrustedcasContent"></a>

```typescript
public resetIdpPemtrustedcasContent(): void
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetRolesKey"></a>

```typescript
public resetRolesKey(): void
```

##### `resetSpEntityId` <a name="resetSpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSpEntityId"></a>

```typescript
public resetSpEntityId(): void
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSubjectKey"></a>

```typescript
public resetSubjectKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityIdInput">idpEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContentInput">idpPemtrustedcasContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContent">idpPemtrustedcasContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKey">rolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityId">spEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKey">subjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpEntityIdInput`<sup>Optional</sup> <a name="idpEntityIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityIdInput"></a>

```typescript
public readonly idpEntityIdInput: string;
```

- *Type:* string

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrlInput"></a>

```typescript
public readonly idpMetadataUrlInput: string;
```

- *Type:* string

---

##### `idpPemtrustedcasContentInput`<sup>Optional</sup> <a name="idpPemtrustedcasContentInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContentInput"></a>

```typescript
public readonly idpPemtrustedcasContentInput: string;
```

- *Type:* string

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKeyInput"></a>

```typescript
public readonly rolesKeyInput: string;
```

- *Type:* string

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityIdInput"></a>

```typescript
public readonly spEntityIdInput: string;
```

- *Type:* string

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKeyInput"></a>

```typescript
public readonly subjectKeyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

---

##### `idpPemtrustedcasContent`<sup>Required</sup> <a name="idpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContent"></a>

```typescript
public readonly idpPemtrustedcasContent: string;
```

- *Type:* string

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKey"></a>

```typescript
public readonly rolesKey: string;
```

- *Type:* string

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKey"></a>

```typescript
public readonly subjectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseOpensearchPropertiesSaml;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---



